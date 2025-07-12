import { useState, type FC } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux';
import { selectPromoCode, selectCartItems } from '../../redux/cart/selectors';
import { applyPromoCode } from '../../redux/cart/slice';
import IconArrowRight from '../../assets/images/icons/icon-arrow-right.svg?react';

import type { PromoCode as PromoCodeType } from '../../data/mockPromoCodes';
import { mockPromoCodes } from '../../data/mockPromoCodes';
import { UiButton } from '../ui/UiButton';

const PromoCode: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useTypedDispatch();
  const selectedCode = useTypedSelector(selectPromoCode);
  const cartItems = useTypedSelector(selectCartItems);

  // Обчислюємо суму кошика
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleApply = () => {
    const trimmedCode = inputValue.trim().toUpperCase();

    if (!trimmedCode) {
      setErrorMessage('Введіть промокод');
      return;
    }

    const promo = mockPromoCodes.find(
      (p: PromoCodeType) => p.code === trimmedCode,
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

    // Якщо все ок, застосовуємо промокод
    setErrorMessage(null);
    dispatch(applyPromoCode(trimmedCode));

    // Локально позначаємо промокод як використаний (для імітації)
    promo.isUsed = true;
  };

  return (
    <div className="h-[186px] w-[395px] pl-[43px] pr-[23px] pt-[12px]">
      <div className="w-full max-w-[330px]">
        <h3 className="mb-[10px] h-[60px] font-family-primary text-h4 uppercase text-light-black">
          У вас є промокод для знижки?
        </h3>

        <div className="flex h-[54px] w-full items-center justify-between gap-[60px]">
          <div className="w-[211px] border border-light-grey text-body-s">
            <input
              type="text"
              placeholder="Промокод для знижки"
              className="h-[54px] w-full cursor-text bg-transparent px-[10px] outline-none placeholder:text-grey"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleApply();
                }
              }}
            />
          </div>

          <UiButton
            as="button"
            onClick={handleApply}
            className="hover:bg-dark-black !h-[54px] !w-[57px] min-w-0 bg-light-black !p-0"
            aria-label="Застосувати промокод"
          >
            <IconArrowRight className="h-[16px] w-[39px] fill-white stroke-transparent" />
          </UiButton>
        </div>
      </div>

      {selectedCode && !errorMessage && (
        <p className="mt-2 text-green-600">
          ✅ Промокод застосовано: {selectedCode}
        </p>
      )}

      {errorMessage && <p className="text-red-500 mt-2">❌ {errorMessage}</p>}
    </div>
  );
};

export { PromoCode };
