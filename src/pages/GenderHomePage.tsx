import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { GenderHeroSection } from '../components/GenderHeroSection';
import { ProductsCategories } from '../components/products/ProductsCategories';
import { PATH_PAGES } from '../constants/pathPages';
import { mockProducts } from '../data/mockProducts';
import { useValidatedGender } from '../hooks/useValidatedGender';

const GenderHomePage: FC = () => {
  const gender = useValidatedGender();

  if (!gender) {
    return <Navigate to={PATH_PAGES.NOT_FOUND} replace />;
  }

  const categories = Array.from(
    new Set(
      mockProducts
        .filter((product) => product.gender === gender)
        .map((product) => product.category),
    ),
  );

  return (
    <>
      <GenderHeroSection gender={gender} />
      <ProductsCategories gender={gender} categories={categories} />
      <h1 className="text-2xl font-bold">
        Gender HomePage <strong>{gender}</strong>
      </h1>
      {/* possibly need to .map() this: */}
      {/* {<NewCollectionSection/>}
      {<BestSellersSection/>}
      {<SalesSection/>} */}
    </>
  );
};

export { GenderHomePage };
