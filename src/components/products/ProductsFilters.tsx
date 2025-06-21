import type { FC } from 'react';
interface ProductsFiltersProps {
  gender: 'men' | 'women';
}

const ProductsFilters: FC<ProductsFiltersProps> = ({ gender }) => {
  return (
    <>
      <ul>
        <li>Filter-1 {gender}</li>
        <li>Filter-2</li>
        <li>Filter-3</li>
      </ul>
    </>
  );
};

export { ProductsFilters };
