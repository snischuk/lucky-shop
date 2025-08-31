import type { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { CATEGORY_MAP } from '../../constants/categoryMap';
import type { Gender } from '../../types/Gender';
// import clsx from 'clsx';

interface ProductsCategoriesProps {
  categories: string[];
  gender: Gender;
}

const ProductsCategories: FC<ProductsCategoriesProps> = ({
  categories,
  gender,
}) => {
  const { category: activeCategory } = useParams<{ category: string }>();
  const categoryDataMap = CATEGORY_MAP[gender];

  return (
    <section className="mx-auto max-w-custom-1440 py-[34px]">
      <ul className="flex justify-center gap-[50px]">
        {categories.map((category) => {
          const data = categoryDataMap[category];
          if (!data) return null;

          const isActive = category === activeCategory;

          return (
            <li key={category} className="flex flex-col items-center gap-2">
              <Link
                to={`/${gender}/products/${category}`}
                className="flex flex-col items-center gap-2"
              >
                <img src={data.image} alt={data.title} />
                <p
                  className={`font-family-primary text-[20px] uppercase transition-colors ${
                    isActive ? 'text-orange' : 'text-light-black'
                  }`}
                >
                  {data.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { ProductsCategories };
