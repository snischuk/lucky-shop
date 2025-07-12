import type { FC } from 'react';

import { CATEGORY_MAP } from '../../constants/categoryMap';
import type { Gender } from '../../types/Gender';

interface ProductsCategoriesProps {
  categories: string[];
  gender: Gender;
}

const ProductsCategories: FC<ProductsCategoriesProps> = ({
  categories,
  gender,
}) => {
  const categoryDataMap = CATEGORY_MAP[gender];
  return (
    <section className="mx-auto max-w-custom-1440 py-[34px]">
      <ul className="flex justify-center gap-[50px]">
        {categories.map((category) => {
          const data = categoryDataMap[category];
          if (!data) return null;

          return (
            <li key={category} className="flex flex-col items-center gap-2">
              <img src={data.image} alt={data.title} />
              <p className="font-family-primary text-[20px] uppercase text-light-black">
                {data.title}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { ProductsCategories };
