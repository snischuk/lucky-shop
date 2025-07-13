import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

import IconHeart from '../../assets/images/icons/icon-heart.svg?react';
import IconHeartActive from '../../assets/images/icons/icon-heart-active.svg?react';
import type { Product } from '../../types/Product';
import { UiLink } from '../ui/UiLink';

type ProductCardProps = {
  item: Product;
};

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    // тут місце для dispatch, API
  };

  return (
    <article className="relative h-[744px] w-[448px] bg-[white]">
      <img
        src={item.image[0]}
        alt={item.name}
        className="h-[520px] w-[448px] object-cover object-top"
      />
      <div className="flex flex-col gap-[14px] p-6 text-center font-family-secondary">
        <h3 className="text-body-m font-medium uppercase">{item.name}</h3>
        <p className="text-body-s text-grey">
          {Object.keys(item.sizes)
            .filter((size) => item.sizes[size as keyof typeof item.sizes] > 0)
            .join(' ')}
        </p>
        <div className="flex justify-center gap-4 font-family-primary text-preload uppercase text-grey">
          <p className={item.oldPrice ? 'text-red' : ''}>{item.price} грн</p>
          {item.oldPrice && (
            <p className="my-auto text-button line-through">
              {item.oldPrice} грн
            </p>
          )}
        </div>

        <UiLink
          as={Link}
          to={`/${item.gender}/products/${item.sku}`}
          variant="filled"
          className="mx-auto w-[260px]"
        >
          Перейти
        </UiLink>
      </div>

      <button
        onClick={toggleFavorite}
        aria-label={isFavorite ? 'Видалити з улюблених' : 'Додати в улюблені'}
        className="text-red-500 hover:text-red-700 absolute right-4 top-4 focus:outline-none"
        type="button"
      >
        <div className="flex h-[33px] w-[33px] items-center justify-center">
          {isFavorite ? <IconHeartActive /> : <IconHeart />}
        </div>
      </button>
    </article>
  );
};

export { ProductCard };
