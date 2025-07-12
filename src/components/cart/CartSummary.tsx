import type { FC } from 'react';
import { useCartSummary } from '../../hooks/useCartSummary';
import { UiButton } from '../ui/UiButton';

export const CartSummary: FC = () => {
  const {
    total,
    discountFromOldPrice, // Знижка від oldPrice
    grandTotal,
    promoCode,
    promoValidationMsg,
  } = useCartSummary();

  return (
    <div className="flex h-[227px] w-[395px] flex-col gap-[14px] border bg-[#f0f0f0] p-5 font-family-secondary text-body-s text-light-black">
      <div className="flex justify-between text-body-s">
        <p>Вартість замовлення</p>
        <p>{total} грн</p>
      </div>

      <div className="flex justify-between text-body-s">
        <p>Знижка</p>
        <p>{discountFromOldPrice} грн</p>
      </div>

      {promoValidationMsg && (
        <p className="text-red-600 mt-2">❌ {promoValidationMsg}</p>
      )}

      <hr className="border-t border-black" />

      <div className="flex justify-between text-lg font-bold">
        <p>
          Разом до оплати
          {promoCode ? ` (промокод: ${promoCode})` : ''}
        </p>
        <p>{grandTotal} грн</p>
      </div>

      <UiButton as="button" className="w-full bg-light-black text-white">
        ОФОРМИТИ ЗАМОВЛЕННЯ
      </UiButton>
    </div>
  );
};
