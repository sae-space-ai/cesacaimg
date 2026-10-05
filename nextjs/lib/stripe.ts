import Stripe from 'stripe';
import { prisma } from './prisma';

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export { stripe };

// Create a payment intent for an order
export async function createPaymentIntent(orderId: string) {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: {
        include: { product: true },
      },
      user: true,
    },
  });

  if (!order) {
    throw new Error('Pedido no encontrado');
  }

  if (order.status !== 'PENDING') {
    throw new Error('El pedido no está pendiente de pago');
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: order.total,
    currency: 'eur',
    metadata: {
      orderId: order.id,
      userId: order.userId,
      email: order.user.email,
    },
    receipt_email: order.user.email,
    description: `CESAC AI - Pedido ${order.id}`,
  });

  // Update order with payment intent ID
  await prisma.order.update({
    where: { id: orderId },
    data: { paymentIntentId: paymentIntent.id },
  });

  return {
    clientSecret: paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
  };
}

// Handle Stripe webhooks
export async function handleStripeWebhook(event: Stripe.Event) {
  switch (event.type) {
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const orderId = paymentIntent.metadata.orderId;

      await prisma.order.update({
        where: { id: orderId },
        data: { status: 'PAID' },
      });

      await prisma.payment.create({
        data: {
          orderId,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          status: 'succeeded',
          method: 'stripe',
          transactionId: paymentIntent.id,
        },
      });

      // Auto-enroll user in products
      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: { items: true },
      });

      if (order) {
        for (const item of order.items) {
          await prisma.enrollment.upsert({
            where: {
              userId_productId: {
                userId: order.userId,
                productId: item.productId,
              },
            },
            update: {},
            create: {
              userId: order.userId,
              productId: item.productId,
              status: 'active',
              progress: 0,
            },
          });
        }
      }

      break;
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const orderId = paymentIntent.metadata.orderId;

      await prisma.order.update({
        where: { id: orderId },
        data: { status: 'CANCELLED' },
      });

      break;
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription;
      
      await prisma.subscription.upsert({
        where: { stripeSubscriptionId: subscription.id },
        update: {
          status: subscription.status,
          currentPeriodStart: new Date(subscription.current_period_start * 1000),
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
        },
        create: {
          userId: subscription.metadata.userId,
          planId: subscription.items.data[0].price.id,
          status: subscription.status,
          currentPeriodStart: new Date(subscription.current_period_start * 1000),
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
          stripeSubscriptionId: subscription.id,
        },
      });

      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;

      await prisma.subscription.update({
        where: { stripeSubscriptionId: subscription.id },
        data: { status: 'cancelled' },
      });

      break;
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice;
      
      if (invoice.subscription) {
        await prisma.subscription.update({
          where: { stripeSubscriptionId: invoice.subscription as string },
          data: {
            currentPeriodStart: new Date(invoice.period_start * 1000),
            currentPeriodEnd: new Date(invoice.period_end * 1000),
          },
        });
      }

      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
}

// Create a Stripe customer
export async function createStripeCustomer(userId: string, email: string, name: string) {
  const customer = await stripe.customers.create({
    email,
    name,
    metadata: { userId },
  });

  return customer.id;
}

// Create a subscription
export async function createSubscription(customerId: string, priceId: string, userId: string) {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    payment_behavior: 'default_incomplete',
    payment_settings: { save_default_payment_method: 'on_subscription' },
    expand: ['latest_invoice.payment_intent'],
    metadata: { userId },
  });

  return {
    subscriptionId: subscription.id,
    clientSecret: (subscription.latest_invoice as Stripe.Invoice).payment_intent?.client_secret,
  };
}

// Cancel a subscription
export async function cancelSubscription(subscriptionId: string, atPeriodEnd = true) {
  if (atPeriodEnd) {
    await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });
  } else {
    await stripe.subscriptions.cancel(subscriptionId);
  }
}
