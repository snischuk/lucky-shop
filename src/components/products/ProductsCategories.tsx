import type { FC } from 'react';

import { CATEGORY_MAP } from '../../constants/categoryMap';
import { useTypedDispatch } from '../../hooks/useRedux';
import { fetchProductByCategory } from '../../redux/products/operations';
import type { Gender } from '../../types/Gender';

interface ProductsCategoriesProps {
  categories: string[];
  gender: Gender;
}

const ProductsCategories: FC<ProductsCategoriesProps> = ({
  categories,
  gender,
}) => {
  const dispatch = useTypedDispatch();
  const categoryDataMap = CATEGORY_MAP[gender];

  const handleCategoryClick = (category: string) => {
    dispatch(fetchProductByCategory(category));
  };
  return (
    <section className="mx-auto max-w-custom-1440 py-[34px]">
      <ul className="flex justify-center gap-[50px]">
        {categories.map((category) => {
          const data = categoryDataMap[category];
          if (!data) return null;

          return (
            <li
              key={category}
              className="flex flex-col items-center gap-2"
              onClick={() => handleCategoryClick(category)}
            >
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
