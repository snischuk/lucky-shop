import { useEffect } from 'react';

import { CartList } from '../components/cart/CartList';
import { EmptyCart } from '../components/cart/EmptyCart';
import { UiTitle } from '../components/ui/UiTitle';
import { mockProducts } from '../data/mockProducts';
import { useTypedDispatch, useTypedSelector } from '../hooks/useRedux';
import { selectCartItems } from '../redux/cart/selectors';
import { addToCart } from '../redux/cart/slice';
import { PromoCode } from '../components/cart/PromoCode';

const CartPage = () => {
  const dispatch = useTypedDispatch();
  const cart = useTypedSelector(selectCartItems);

  useEffect(() => {
    const firstThreeProducts = mockProducts.slice(0, 3); // тимчасово, поки немає API

    firstThreeProducts.forEach((product) => {
      dispatch(
        addToCart({
          sku: product.sku,
          name: product.name,
          price: product.price,
          brand: product.brand,
          image: product.image,
          category: product.category,
          quantity: 1,
        }),
      );
    });
  }, []);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto w-full max-w-custom-1440 px-[33px] pb-[39px] pt-[140px]">
      <UiTitle className="mb-[80px] text-center" as="h2">
        Мій кошик
      </UiTitle>
      <div className="flex w-full gap-5">
        <div className="w-[961px]">
          <CartList items={cart} />
        </div>
        <div className="w-[395px] gap-[20px]">
          <PromoCode />
          {/* <CartSummary /> */}
          <p>Введіть промокод</p>
          <p>Сума</p>
        </div>
      </div>
    </div>
  );
};

export { CartPage };
