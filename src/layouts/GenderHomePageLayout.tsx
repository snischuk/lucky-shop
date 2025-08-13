import React, { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { GallerySection } from '../components/gender/GallerySection';
import { GenderHeroSection } from '../components/GenderHeroSection';
import { ProductsCategories } from '../components/products/ProductsCategories';
import { UiLoader } from '../components/ui/UiLoader';
import { PATH_PAGES } from '../constants/pathPages';
import { useGenderCategories } from '../hooks/useGenderCategories';

const GenderHomePageLayout = () => {
  const { gender, categories } = useGenderCategories();

  if (!gender) {
    return <Navigate to={PATH_PAGES.NOT_FOUND} replace />;
  }

  return (
    <>
      <GenderHeroSection gender={gender} />
      <ProductsCategories gender={gender} categories={categories} />
      <Suspense fallback={<UiLoader size={80} mode="centered" />}>
        <Outlet />
      </Suspense>
      <GallerySection gender={gender} />
    </>
  );
};

export { GenderHomePageLayout };
