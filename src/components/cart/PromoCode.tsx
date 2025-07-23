import { type FC, useState } from 'react';

import IconArrowRight from '../../assets/images/icons/icon-arrow-right.svg?react';
import type { PromoCode as PromoCodeType } from '../../data/mockPromoCodes';
import { mockPromoCodes } from '../../data/mockPromoCodes';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux';
import { selectCartItems, selectPromoCode } from '../../redux/cart/selectors';
import { applyPromoCode } from '../../redux/cart/slice';
import { UiButton } from '../ui/UiButton';

const PromoCode: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useTypedDispatch();
  const selectedCode = useTypedSelector(selectPromoCode);
  const cartItems = useTypedSelector(selectCartItems);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const calculateDiscount = (promo: PromoCodeType, total: number): number => {
    if (promo.discountType === 'percent') {
      return Math.floor((total * promo.value) / 100);
    }
    if (promo.discountType === 'fixed') {
      return Math.min(promo.value, total);
    }
    return 0;
  };

  const handleApply = (): void => {
    const trimmedCode = inputValue.trim().toUpperCase();

    if (!trimmedCode) {
      setErrorMessage('Введіть промокод');
      return;
    }

    const promo = mockPromoCodes.find(
      (p: PromoCodeType) => p.code.toUpperCase() === trimmedCode,
    );

    if (!promo) {
      setErrorMessage('Промокод не знайдено');
      return;
    }

    if (!promo.isActive) {
      setErrorMessage('Промокод не активний');
      return;
    }

    const now = new Date();
    if (promo.expiresAt && new Date(promo.expiresAt) <= now) {
      setErrorMessage('Термін дії промокоду завершився');
      return;
    }

    if (promo.minOrderTotal && total < promo.minOrderTotal) {
      setErrorMessage('Не відповідає мінімальній сумі замовлення');
      return;
    }

    if (promo.isUsed) {
      setErrorMessage('Промокод вже використано');
      return;
    }

    // Якщо всі перевірки пройшли — застосовуємо промокод
    setErrorMessage(null);
    dispatch(applyPromoCode(trimmedCode));

    // Локальна імітація: позначаємо промокод як використаний (опціонально)
    promo.isUsed = true;
  };

  // Знайти застосований промокод для показу знижки
  const appliedPromo = selectedCode
    ? mockPromoCodes.find(
        (p) => p.code.toUpperCase() === selectedCode.toUpperCase(),
      )
    : null;
  const discount = appliedPromo ? calculateDiscount(appliedPromo, total) : 0;

  return (
    <div className="h-[186px] w-[395px] pb-[10px] pl-[43px] pr-[23px] pt-3">
      <div className="w-full max-w-[330px]">
        <h3 className="mb-[10px] h-[60px] font-family-primary text-h4 uppercase text-light-black">
          У вас є промокод для знижки?
        </h3>

        <div className="flex h-[54px] w-full items-center justify-between gap-[60px] gap-y-[18px] border border-light-grey">
          <div className="w-[211px] text-[18px] leading-[1.4]">
            <input
              type="text"
              placeholder="Промокод для знижки"
              className="h-[54px] w-full cursor-text bg-transparent px-[10px] outline-none placeholder:text-grey"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleApply();
                }
              }}
            />
          </div>

          <UiButton
            onClick={handleApply}
            className="hover:bg-dark-black h-[54px] w-[57px] min-w-0 bg-light-black p-0 text-white"
            aria-label="Застосувати промокод"
          >
            <IconArrowRight className="h-[16px] w-[39px]" />
          </UiButton>
        </div>
      </div>

      {selectedCode && !errorMessage && (
        <p className="mt-1">
          ✅ Промокод застосовано: <strong>{selectedCode}</strong>
          <br />
          Знижка: {discount} грн
        </p>
      )}

      {errorMessage && <p className="mt-2 text-red">❌ {errorMessage}</p>}
    </div>
  );
};

export { PromoCode };
