import { ChevronRight } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-cesac-900 mb-3">Preguntas frecuentes</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-gray-50 rounded-lg">
            <summary className="p-4 cursor-pointer font-medium text-sm text-cesac-900 hover:text-cesac-700 list-none flex justify-between items-center">
              {faq.q}
              <ChevronRight className="w-4 h-4 transition group-open:rotate-90" />
            </summary>
            <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
