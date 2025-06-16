import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { GenderHeroSection } from '../components/GenderHeroSection';
import { ProductsCategories } from '../components/products/ProductsCategories';
import { PATH_PAGES } from '../constants/pathPages';
import { useGenderCategories } from '../hooks/useGenderCategories';

const GenderHomePage: FC = () => {
  const { gender, categories } = useGenderCategories();

  if (!gender) {
    return <Navigate to={PATH_PAGES.NOT_FOUND} replace />;
  }

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
