import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const ProductCategoryPage: FC = () => {
  const { category } = useParams();
  return (
    <div>
      <h1>Продукти категорії: {category}</h1>
      <p>Тут відображаються продукти категорії "{category}".</p>
    </div>
  );
};

export { ProductCategoryPage };
