import type { NavigationLink } from '../types/NavigationLink';

export const NAVIGATION_LINKS: NavigationLink[] = [
  { id: 'home', to: '/', label: 'Головна' },
  { id: 'about', to: '/about', label: 'Про нас' },
  { id: 'catalog', to: '/catalog', label: 'Каталог' },
  { id: 'discounts', to: '/discounts', label: 'Знижки' },
  { id: 'delivery', to: '/delivery-and-payment', label: 'Оплата та доставка' },
  { id: 'cart', to: '/cart', label: 'Кошик' },
];
