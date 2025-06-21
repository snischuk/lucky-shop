import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { mockProducts } from '../../data/mockProducts';

const ProductDetailPage: FC = () => {
  const { productId } = useParams();
  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return <div className="py-10 text-center text-lg">Продукт не знайдено</div>;
  }
  return (
    <div className="max-w-6*1 mx-auto grid grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:px-8">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-x1 h-auto w-full object-cover shadow-md"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-2*1 mb-4 font-bold text-gray-900">
          {product.name}
        </h1>
        <p className="mb-2 text-xl font-semibold text-black">
          Ціна: {product.price} грн
        </p>
        <p className="mb-1 text-gray-700">Категорія: {product.category}</p>
        <p className="mb-1 text-gray-700">Сезон: {product.season}</p>
        <p className="mb-1 text-gray-700">Колір: {product.color}</p>
        <p className="mb-4 text-gray-700">
          Розміри: {product.sizes.join(', ')}
        </p>
      </div>
      {/* <h1>
        Деталі продукту: {productId} for {gender}
      </h1> */}
      {/* {<ProductDetail/>} */}
      {/* {<ProductsRecommendations/>} */}
    </div>
  );
};

export { ProductDetailPage };
