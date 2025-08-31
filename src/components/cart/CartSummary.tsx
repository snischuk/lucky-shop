import type { FC } from 'react';

import { useTypedSelector } from '../../hooks/useRedux';
import { selectCartSummary } from '../../redux/cart/selectors';
import { UiButton } from '../ui/UiButton';

export const CartSummary: FC = () => {
  const {
    total,
    totalOld,
    discountFromOldPrice,
    discountFromPromo,
    grandTotal,
    promoMsg,
    promoOk,
  } = useTypedSelector(selectCartSummary);

  const goodsDiscount = discountFromOldPrice || 0;
  const promo = discountFromPromo || 0;
  const totalDiscount = goodsDiscount + promo;
  const orderValue = (typeof totalOld === 'number' ? totalOld : total) || 0;

  return (
    <div className="flex w-[395px] flex-col gap-[18px] border p-5 font-family-secondary text-[18px] leading-[1.17] text-light-black">
      <div className="flex justify-between">
        <p>Вартість замовлення</p>
        <p>{orderValue} грн</p>
      </div>

      <div className="flex justify-between">
        <p>Знижка</p>
        <p>-{totalDiscount} грн</p>
      </div>

      <hr className="border-t border-black" />

      <div className="flex justify-between font-bold">
        <p>Разом до оплати</p>
        <p>{grandTotal} грн</p>
      </div>

      {promoMsg && (
        <p
          className={`text-[14px] ${promoOk ? 'text-green-700' : 'text-red-600'}`}
        >
          {promoMsg}
        </p>
      )}

      <UiButton variant="filled">ОФОРМИТИ ЗАМОВЛЕННЯ</UiButton>
    </div>
  );
};
