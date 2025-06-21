import type { FC } from 'react';
interface ProductsListProps {
  gender: 'men' | 'women';
}
const mockProducts = [
  {
    id: '1',
    title: 'suknia',
    price: '1299',
    image: '',
  },
];

const ProductsList: FC<ProductsListProps> = ({ gender }) => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {mockProducts.map((product) => (
        <div key={product.id} className="border p-4 text-center">
          <img
            scr={product.image}
            alt={product.title}
            className="h-auto w-full"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">{product.price} грн</p>
        </div>
      ))}
      ProductsList for {gender}
    </div>
  );
};

export { ProductsList };
