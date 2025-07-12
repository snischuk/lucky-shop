import type { FooterNavigationLink } from '../types/FooterNavigationLink';

export const FOOTER_NAVIGATION_LINKS: FooterNavigationLink[] = [
  { id: 'home', to: '/', label: 'Головна' },
  { id: 'about', to: '/about', label: 'Про нас' },
  { id: 'discounts', to: '/discounts', label: 'Знижки' },
  { id: 'delivery', to: '/delivery-and-payment', label: 'Оплата та доставка' },
];
