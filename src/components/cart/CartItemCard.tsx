import type { FC } from 'react';

import type { CartItem } from '../../types/CartItem';

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: FC<CartItemCardProps> = ({ item }) => {
  return (
    <li key={item.sku} className="flex gap-5 border p-5">
      <div className="h-[238px] w-[182px] bg-light-grey">
        <img src={item.image[0]} alt={item.name}></img>
      </div>
      <div className="w-full">
        <div className="align-center mb-[10px] flex justify-between font-family-primary uppercase text-black">
          <div className="text-[24px] leading-[1.25]">{item.name}</div>
          <p className="text-[20px]">{item.price} грн</p>
        </div>
        <div className="mb-[10px] flex gap-6 font-family-secondary text-body-s text-light-black">
          <p>Артикул: {item.sku}</p>
          <p>Бренд: {item.brand}</p>
        </div>
        <p className="mb-5 font-family-secondary text-body-s text-light-black">
          Розмір:
        </p>
        <div>
          <p>Кількість: 1</p>
        </div>
      </div>
    </li>
  );
};

export { CartItemCard };
