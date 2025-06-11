import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { GenderHeroSection } from '../components/GenderHeroSection';
import { ProductsCategories } from '../components/products/ProductsCategories';
import { PATH_PAGES } from '../constants/pathPages';
import { useValidatedGender } from '../hooks/useValidatedGender';

const GenderHomePage: FC = () => {
  const gender = useValidatedGender();

  if (!gender) {
    return <Navigate to={PATH_PAGES.NOT_FOUND} replace />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">
        Gender HomePage <strong>{gender}</strong>
      </h1>
      <GenderHeroSection />
      <ProductsCategories />

      {/* possibly need to .map() this: */}
      {/* {<NewCollectionSection/>}
      {<BestSellersSection/>}
      {<SalesSection/>} */}
    </div>
  );
};

export { GenderHomePage };
