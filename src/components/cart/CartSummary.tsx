import type { FC } from 'react';

import { UiButton } from '../ui/UiButton';

export const CartSummary: FC = () => {
  return (
    <div className="flex h-[227px] w-[395px] flex-col gap-[14px] border bg-[#f0f0f0] p-5 font-family-secondary text-body-s text-light-black">
      <div className="flex justify-between text-body-s">
        <p>Вартість замовлення</p>
        <p> грн</p>
      </div>
      <div className="flex justify-between text-body-s">
        <p>Знижка</p>
        <p> грн</p>
      </div>
      <hr className="border-t border-black" />

      <div className="flex justify-between text-lg font-bold">
        <p>Разом до оплати</p>
        <p> грн</p>
      </div>

      <UiButton className="h-[56px] w-full bg-light-black text-white">
        ОФОРМИТИ ЗАМОВЛЕННЯ
      </UiButton>
    </div>
  );
};
