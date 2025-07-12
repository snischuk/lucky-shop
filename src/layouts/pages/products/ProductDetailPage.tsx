import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: FC = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>Деталі продукту: {productId}</h1>
      {/* {<ProductDetail/>} */}
      {/* {<ProductsRecommendations/>} */}
    </div>
  );
};

export { ProductDetailPage };
