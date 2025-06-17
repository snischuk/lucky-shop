import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { GallerySection } from '../components/gender/GallerySection';
import { NewCollectionSection } from '../components/gender/NewCollectionSection';
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
      <NewCollectionSection />
      <GallerySection gender={gender} />
      {/* possibly need to .map() this: */}
      {/* {<NewCollectionSection/>}
      {<BestSellersSection/>}
      {<SalesSection/>} */}
    </>
  );
};

export { GenderHomePage };
