import type { FC } from 'react';

import { UiButton } from '../ui/UiButton';

export const CartSummary: FC = () => {
  return (
    <div className="flex h-[227px] w-[395px] flex-col gap-[18px] border border-light-black bg-header p-5 font-family-secondary text-[18px] leading-[21.1px] text-light-black">
      <div className="flex justify-between">
        <p>Вартість замовлення</p>
        <p> грн</p>
      </div>
      <div className="flex justify-between">
        <p>Знижка</p>
        <p> грн</p>
      </div>
      <hr className="border-t border-black" />

      <div className="flex justify-between font-bold">
        <p>Разом до оплати</p>
        <p> грн</p>
      </div>

      <UiButton variant="filled">ОФОРМИТИ ЗАМОВЛЕННЯ</UiButton>
    </div>
  );
};
