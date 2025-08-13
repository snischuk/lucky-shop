import { type FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ButtonPreviousPage } from '../../components/ButtonPreviousPage';
import { ProductCard } from '../../components/products/ProductCard';
import { UiTitle } from '../../components/ui/UiTitle';
import { useTypedDispatch } from '../../hooks/useRedux';
import { fetchProduct } from '../../redux/products/operations';
import {
  selectNewCollectionByGender,
  selectProducts,
} from '../../redux/products/selectors';
import type { Gender } from '../../types/Gender';

const NewCollectionPage: FC = () => {
  const { gender } = useParams<{ gender: Gender }>();
  const dispatch = useTypedDispatch();
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectNewCollectionByGender(gender));
  console.log(filteredProducts);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProduct());
    }
  }, [dispatch, products.length]);

  return (
    <div className="relative mx-auto w-full max-w-custom-1440 px-6 pb-[70px] pt-[106px]">
      <UiTitle className="mb-[80px] text-center" as="h2">
        Нова колекція
      </UiTitle>
      <ButtonPreviousPage className="absolute top-20 self-start" />
      <div className="mx-auto flex flex-wrap gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.sku} item={product} />
        ))}
      </div>
    </div>
  );
};

export { NewCollectionPage };
