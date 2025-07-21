import { type FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ButtonPreviousPage } from '../../components/ButtonPreviousPage';
import { ProductDetail } from '../../components/products/ProductDetail';
import { useTypedDispatch } from '../../hooks/useRedux';
import { fetchProductBySku } from '../../redux/products/operations';
import { selectProductBySku } from '../../redux/products/selectors';

const ProductDetailPage: FC = () => {
  const { productId } = useParams();
  const dispatch = useTypedDispatch();

  const product = useSelector(selectProductBySku);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductBySku(productId));
    }
  }, [dispatch, productId]);

  if (!product) return null;

  return (
    <div className="relative mx-auto w-full max-w-custom-1440 px-6 pb-[70px] pt-[106px]">
      <ButtonPreviousPage className="absolute top-10 self-start" />
      <ProductDetail product={product} />
      {/* {<ProductsRecommendations/>} */}
    </div>
  );
};

export { ProductDetailPage };
