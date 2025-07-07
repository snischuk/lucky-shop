import { type FC } from 'react';
import { Link } from 'react-router-dom';

import type { Product } from '../../types/Product';
import { UiButton } from '../ui/UiButton';

type ProductCardProps = {
  item: Product;
};

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <article className="h-[744px] w-[448px] bg-[white]">
      <img src={item.image[0]} alt={item.name} className="h-[520px]" />
      <div className="flex flex-col gap-[14px] p-6 text-center font-family-secondary">
        <h3 className="text-body-m font-medium uppercase">{item.name}</h3>
        <p className="text-body-s text-grey">
          {Object.keys(item.sizes)
            .filter((size) => item.sizes[size as keyof typeof item.sizes] > 0)
            .join(' ')}
        </p>
        <p className="font-family-primary text-preload uppercase text-grey">
          1200 грн
        </p>
        <UiButton
          as={Link}
          to={`${item.gender}/products/${item.sku}`}
          variant="contained"
          className="mx-auto w-[260px]"
        >
          Перейти
        </UiButton>
      </div>
    </article>
  );
};

export { ProductCard };
