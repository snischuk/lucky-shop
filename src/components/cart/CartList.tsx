import type { FC } from 'react';

import type { CartItem } from '../../types/CartItem';
import { CartItemCard } from './CartItemCard';

interface CartListProps {
  items: CartItem[];
}

const CartList: FC<CartListProps> = ({ items }) => {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <CartItemCard item={item} />
      ))}
    </ul>
  );
};

export { CartList };
