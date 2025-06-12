import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

// import { ProductsCategories } from '../components/products/ProductsCategories';

const ProductsLayout: FC = () => {
  return (
    <>
      {/* <ProductsCategories /> */}
      <Outlet />
    </>
  );
};

export { ProductsLayout };
