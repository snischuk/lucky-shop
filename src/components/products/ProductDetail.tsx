import { type FC, useState } from 'react';

import IconHeart from '../../assets/images/icons/icon-heart.svg?react';
import IconSizes from '../../assets/images/icons/icon-sizes.svg?react';
import type { Product } from '../../types/Product';
import { UiButton } from '../ui/UiButton';
import { ProductDetailImages } from './ProductDetailImages';
import { ProductDetailInfoAccordion } from './ProductDetailInfoAccordion';
import { ProductSizeSelector } from './ProductSizeSelector';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const {
    name,
    sku,
    brand,
    price,
    sizes,
    image,
    color,
    season,
    description,
    material,
  } = product;
  const sizesStr = Object.keys(sizes).join(' ');

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-[802px_556px] gap-6 font-family-primary text-light-black">
      {/* Фото товару */}
      <ProductDetailImages image={image} name={name} />

      {/* Опис товару */}
      <div className="flex w-[566px] flex-col gap-5">
        <h1 className="text-h2 text-black">{name}</h1>
        <div className="flex gap-6 text-preload">
          <p>Артикул: {sku}</p>
          <p>Бренд: {brand}</p>
        </div>
        <p className="text-body-l uppercase">{price} грн</p>

        <div className="border border-grey"></div>

        <p className="text-body-m uppercase">Розмір</p>
        <p className="font-family-secondary text-body-m">
          <ProductSizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            onSelect={setSelectedSize}
          />
        </p>
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
            <IconHeart className="h-[22px] w-[24px]" />
          </UiButton>
        </div>

        <ProductDetailInfoAccordion
          sizes={sizesStr}
          color={color}
          description={description}
          season={season}
          material={material}
        />
      </div>
    </div>
  );
};

export { ProductDetail };
