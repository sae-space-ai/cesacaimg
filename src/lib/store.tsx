import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type UserRole = 'VISITOR' | 'STUDENT' | 'PROFESSIONAL' | 'COMPANY_USER' | 'COMPANY_ADMIN' | 'PUBLIC_EMPLOYEE' | 'PUBLIC_ORG_ADMIN' | 'TEACHER' | 'TUTOR' | 'CONSULTANT' | 'CONTENT_MANAGER' | 'SALES' | 'PROCUREMENT_MANAGER' | 'COMPLIANCE_OFFICER' | 'ADMIN' | 'SUPERADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  organization?: string;
  enrolledCourses: string[];
  progress: Record<string, number>;
  certificates: string[];
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  timestamp: number;
}

interface AppState {
  user: User | null;
  cart: CartItem[];
  notifications: Notification[];
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
}

type Action =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'ENROLL_COURSE'; payload: string }
  | { type: 'UPDATE_PROGRESS'; payload: { courseId: string; progress: number } };

const initialState: AppState = {
  user: null,
  cart: [],
  notifications: [],
  sidebarOpen: false,
  theme: 'light'
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'ADD_TO_CART': {
      const existing = state.cart.find(i => i.productId === action.payload.productId);
      if (existing) {
        return { ...state, cart: state.cart.map(i => i.productId === action.payload.productId ? { ...i, quantity: i.quantity + 1 } : i) };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(i => i.productId !== action.payload) };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [...state.notifications, action.payload] };
    case 'REMOVE_NOTIFICATION':
      return { ...state, notifications: state.notifications.filter(n => n.id !== action.payload) };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'ENROLL_COURSE':
      if (!state.user) return state;
      return { ...state, user: { ...state.user, enrolledCourses: [...state.user.enrolledCourses, action.payload] } };
    case 'UPDATE_PROGRESS':
      if (!state.user) return state;
      return { ...state, user: { ...state.user, progress: { ...state.user.progress, [action.payload.courseId]: action.payload.progress } } };
    default:
      return state;
  }
}

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export function notify(dispatch: React.Dispatch<Action>, type: Notification['type'], message: string) {
  const id = uuidv4();
  dispatch({ type: 'ADD_NOTIFICATION', payload: { id, type, message, timestamp: Date.now() } });
  setTimeout(() => dispatch({ type: 'REMOVE_NOTIFICATION', payload: id }), 5000);
}

export function hasRole(userRole: UserRole, requiredRoles: UserRole[]): boolean {
  return requiredRoles.indexOf(userRole) !== -1;
}

export function canAccessAdmin(role: UserRole): boolean {
  return role === 'ADMIN' || role === 'SUPERADMIN';
}

export function canAccessTeacher(role: UserRole): boolean {
  return ['TEACHER', 'TUTOR', 'ADMIN', 'SUPERADMIN', 'CONTENT_MANAGER'].indexOf(role) !== -1;
}

export function canAccessGovernance(role: UserRole): boolean {
  return ['COMPLIANCE_OFFICER', 'ADMIN', 'SUPERADMIN'].indexOf(role) !== -1;
}

export function canAccessProcurement(role: UserRole): boolean {
  return ['PROCUREMENT_MANAGER', 'ADMIN', 'SUPERADMIN'].indexOf(role) !== -1;
}
