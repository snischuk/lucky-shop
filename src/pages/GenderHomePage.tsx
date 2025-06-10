import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { GenderHeroSection } from '../components/GenderHeroSection';
import { ProductsCategories } from '../components/products/ProductsCategories';

const GenderHomePage: FC = () => {
  const { gender } = useParams();

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
