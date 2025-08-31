import type { FC } from 'react';

import IconArrow from '../../assets/images/icons/icon-arrow-down.svg?react';
import type { CartItem } from '../../types/CartItem';

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: FC<CartItemCardProps> = ({ item }) => {
  const hasOld =
    typeof item.oldPrice === 'number' &&
    Number.isFinite(item.oldPrice) &&
    item.oldPrice > item.price;
  return (
    <article className="flex gap-5 border p-5">
      <div className="h-[238px] w-[182px] bg-light-grey">
        <img src={item.image[0]} alt={item.name}></img>
      </div>
      <div className="w-full">
        <div className="align-center mb-[10px] flex justify-between font-family-primary uppercase text-black">
          <h3 className="text-[24px] leading-[1.25]">{item.name}</h3>
          {hasOld ? (
            // ціни одна під одною, притиснуті до правого краю
            <div className="flex flex-col items-end leading-none">
              <span className="text-[20px] font-semibold text-red">
                {item.price} грн
              </span>
              <span className="mt-1 text-[16px] text-grey line-through">
                {item.oldPrice} грн
              </span>
            </div>
          ) : (
            // якщо знижки нема — просто поточна ціна праворуч
            <span className="text-[20px]">{item.price} грн</span>
          )}
        </div>
        <div className="mb-[10px] flex gap-6 font-family-secondary text-body-s text-light-black">
          <p>Артикул: {item.sku}</p>
          <p>Бренд: {item.brand}</p>
        </div>
        <div className="mb-5 flex items-center gap-6 font-family-secondary text-body-s text-light-black">
          <p>Розмір:</p>
          <div className="relative">
            <select className="w-[80px] appearance-none rounded px-3 py-2 font-family-secondary focus:outline-none">
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <IconArrow className="pointer-events-none absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2" />
          </div>
        </div>
        <div>
          <p>Кількість: 1</p>
        </div>
      </div>
    </article>
  );
  <div className="flex w-[395px] flex-col gap-[60px]"> </div>;
};

export { CartItemCard };
