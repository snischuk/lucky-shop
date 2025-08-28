import { type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsFilters } from '../../components/products/ProductsFilters';
import { ProductsList } from '../../components/products/ProductsList';
import { ProductsPagination } from '../../components/products/ProductsPagination';
import type { CATEGORY_MAP } from '../../constants/categoryMap';
import { useTypedDispatch } from '../../hooks/useRedux';
import { fetchProducts } from '../../redux/products/operations';
import type { Gender } from '../../types/Gender';

const ProductsPage: FC = () => {
  const dispatch = useTypedDispatch();
  const { gender, category } = useParams<{
    gender: string;
    category?: string;
  }>();

  const typedCategory =
    category?.toLowerCase() as keyof (typeof CATEGORY_MAP)[Gender];

  useEffect(() => {
    if (gender) {
      dispatch(
        fetchProducts({
          filters: {
            gender,
            category: typedCategory ?? null,
          },
        }),
      );
    }
  }, [dispatch, typedCategory, gender]);
  return (
    <>
      <ProductsFilters />
      <ProductsList />
      <ProductsPagination />
    </>
  );
};

export { ProductsPage };
