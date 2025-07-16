import type { FC } from 'react';

import IconHeart from '../../assets/images/icons/icon-heart.svg?react';
import IconPlus from '../../assets/images/icons/icon-plus.svg?react';
import IconSizes from '../../assets/images/icons/icon-sizes.svg?react';
import type { Product } from '../../types/Product';
import { UiButton } from '../ui/UiButton';
import { ProductDetailImages } from './ProductDetailImages';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const { name, sku, brand, price, sizes, image } = product;
  const sizesStr = Object.keys(sizes).join(' ');

  return (
    <div className="grid grid-cols-[802px_556px] gap-6 font-family-primary text-light-black">
      {/* Ліва частина — зображення товару */}
      <ProductDetailImages image={image} name={name} />

      {/* Права частина — опис товару */}
      <div className="flex w-[566px] flex-col gap-6">
        <h1 className="text-h2 text-black">{name}</h1>
        <div className="flex gap-6 text-preload">
          <p>Артикул: {sku}</p>
          <p>Бренд: {brand}</p>
        </div>
        <p className="text-body-l uppercase">{price} грн</p>

        <div className="border border-grey"></div>

        <p className="text-body-m uppercase">Розмір</p>
        <p className="gap-3 font-family-secondary text-body-m">{sizesStr}</p>
        <div className="flex gap-3 font-medium">
          <IconSizes />
          <p className="font-family-secondary text-body-m uppercase underline decoration-1 underline-offset-4">
            Розміри
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <UiButton variant="filled" className="text-[20px]">
            Додати в кошик
          </UiButton>
          <UiButton
            variant="bordered"
            className="flex gap-6 fill-transparent stroke-light-black text-[20px] hover:stroke-orange"
          >
            <span>Додати в збережене</span>
            <span>
              <IconHeart className="h-[22px] w-[24px]" />
            </span>
          </UiButton>
        </div>
        <div className="flex-start flex flex-col gap-3 text-[20px]">
          <UiButton className="justify-between">
            <span className="font-family-primary">Склад і догляд</span>
            <IconPlus className="h-7 w-7" />
          </UiButton>
          <UiButton className="justify-between">
            <span className="font-family-primary">Опис</span>
            <IconPlus className="h-7 w-7" />
          </UiButton>
          <UiButton className="justify-between">
            <span className="font-family-primary">Характеристики</span>
            <IconPlus className="h-7 w-7" />
          </UiButton>
          <UiButton className="justify-between">
            <span className="font-family-primary">Доставка та повернення</span>
            <IconPlus className="h-7 w-7" />
          </UiButton>
        </div>
      </div>
    </div>
  );
};

export { ProductDetail };
