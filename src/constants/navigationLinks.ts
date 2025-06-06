import type { NavigationLink } from '../types/NavigationLink';

export const navigationLinks: NavigationLink[] = [
  { id: 'home', to: '/', label: 'Головна' },
  { id: 'about', to: '/about', label: 'Про нас' },
  { id: 'catalog', to: '/catalog', label: 'Каталог' },
  { id: 'discounts', to: '/discounts', label: 'Знижки' },
  { id: 'delivery', to: '/delivery-and-payment', label: 'Оплата та доставка' },
];
