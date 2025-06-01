import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { category, productId } = useParams();
  return (
    <div>
      <h1>Деталі продукту: {productId}</h1>
      <p>Категорія: {category}</p>
    </div>
  );
};

export { ProductDetailPage };
