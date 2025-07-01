import type { FC } from 'react';

import type { CartItem } from '../../types/CartItem';
import { CartItemCard } from './CartItemCard';

interface CartListProps {
  items: CartItem[];
}

const CartList: FC<CartListProps> = ({ items }) => {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <CartItemCard key={item.sku} item={item} />
      ))}
    </div>
  );
};

export { CartList };
