import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { GallerySection } from '../components/gender/GallerySection';
import { NewCollectionSection } from '../components/gender/NewCollectionSection';
import { SalesSection } from '../components/gender/SalesSection';
import { TopSalesSection } from '../components/gender/TopSalesSection';
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
      <NewCollectionSection gender={gender} />
      <TopSalesSection gender={gender} />
      <SalesSection gender={gender} />
      <GallerySection gender={gender} />
    </>
  );
};

export { GenderHomePage };
