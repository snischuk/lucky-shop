import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: FC = () => {
  const { gender, productId } = useParams<{
    gender: 'men' | 'women';
    productId: string;
  }>();

  return (
    <div>
      <h1>
        Деталі продукту: {productId} for {gender}
      </h1>
      {/* {<ProductDetail/>} */}
      {/* {<ProductsRecommendations/>} */}
    </div>
  );
};

export { ProductDetailPage };
