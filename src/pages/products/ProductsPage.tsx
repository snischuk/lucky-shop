import type { FC } from 'react';

import { ProductsFilters } from '../../components/products/ProductsFilters';
import { ProductsList } from '../../components/products/ProductsList';
import { ProductsPagination } from '../../components/products/ProductsPagination';

const ProductsPage: FC = () => {
  return (
    <>
      <ProductsFilters />
      <ProductsList />
      <ProductsPagination />
    </>
  );
};

export { ProductsPage };
