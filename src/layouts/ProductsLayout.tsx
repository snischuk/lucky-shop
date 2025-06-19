import type { FC } from 'react';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ProductsCategories } from '../components/products/ProductsCategories';
import { Loader } from '../components/ui/UiLoader';
import { PATH_PAGES } from '../constants/pathPages';
import { useGenderCategories } from '../hooks/useGenderCategories';

const ProductsLayout: FC = () => {
  const { gender, categories } = useGenderCategories();

  if (!gender) {
    return <Navigate to={PATH_PAGES.NOT_FOUND} replace />;
  }

  return (
    <>
      <ProductsCategories categories={categories} gender={gender} />
      <Suspense fallback={<Loader size={80} mode="centered" />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export { ProductsLayout };
