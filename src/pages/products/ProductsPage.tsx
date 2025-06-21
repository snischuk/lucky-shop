import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsFilters } from '../../components/products/ProductsFilters';
import { ProductsList } from '../../components/products/ProductsList';
import { ProductsPagination } from '../../components/products/ProductsPagination';

const ProductsPage: FC = () => {
  const { gender } = useParams();
  return (
    <section className="mx-auto max-w-custom-1440 px-4 py-8">
      <div className="flex flex-col gap-6 md:flex-row">
        <aside className="w-full md:w-1/4">
          <ProductsFilters gender={gender as 'men' | 'women'} />
        </aside>
        <div className="md:w3/4 w-full space-y-6">
          <ProductsList gender={gender as 'men' | 'women'} />
          <ProductsPagination />
        </div>
      </div>
    </section>
  );
};

export { ProductsPage };
