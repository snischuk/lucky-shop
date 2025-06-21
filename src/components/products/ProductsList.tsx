import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { mockProducts } from '../../data/mockProducts';

interface ProductsListProps {
  gender: 'men' | 'women';
}

const ProductsList: FC<ProductsListProps> = ({ gender }) => {
  const filteredProducts = mockProducts.filter(
    (product) => product.gender === gender,
  );
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 md:px-8 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <Link
          to={`/${product.gender}/products/${product.id}`}
          key={product.id}
          className="rounded-lg border p-4 transition-shadow hover:shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full rounded object-cover"
          />
          <h3 className="mt-4 text-base font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="mt-2 text-lg font-bold text-black">
            {product.price} грн
          </p>
        </Link>
      ))}
    </div>
  );
};

export { ProductsList };
