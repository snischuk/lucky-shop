import { useState, type FC } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux';
import { selectPromoCode, selectCartItems } from '../../redux/cart/selectors';
import { applyPromoCode } from '../../redux/cart/slice';
import IconArrowRight from '../../assets/images/icons/icon-arrow-right.svg?react';

import type { PromoCode as PromoCodeType } from '../../data/mockPromoCodes';
import { mockPromoCodes } from '../../data/mockPromoCodes';
import { UiButton } from '../ui/UiButton';
// import { selectPromoValidationMsg } from '../../redux/selectors';

const PromoCode: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useTypedDispatch();
  const selectedCode = useTypedSelector(selectPromoCode);
  const cartItems = useTypedSelector(selectCartItems);
  // const promoValidationMsg = useSelector(selectPromoValidationMsg);

  const handleApply = () => {
    const trimmedCode = inputValue.trim().toUpperCase();

    if (!trimmedCode) {
      setErrorMessage('Введіть промокод');
      return;
    }

    const promo = mockPromoCodes.find(
      (p: PromoCodeType) => p.code === trimmedCode,
    );

    // Перевірки на валідність промокоду
    //   if (!promo) {
    //     dispatch(setPromoValidationMsg('Промокод не знайдено або недійсний'));
    //     return;
    //   }

    //   if (!promo.isActive) {
    //     dispatch(setPromoValidationMsg('Промокод неактивний'));
    //     return;
    //   }

    //   if (
    //     promo.isUsed ||
    //     usedPromoCodes.some((code) => code.toUpperCase() === trimmedCode)
    //   ) {
    //     dispatch(setPromoValidationMsg('Промокод вже використаний'));
    //     return;
    //   }

    //   if (promo.expiresAt && new Date(promo.expiresAt) < new Date()) {
    //     dispatch(setPromoValidationMsg('Термін дії промокоду завершився'));
    //     return;
    //   }

    //   if (promo.minOrderTotal && total < promo.minOrderTotal) {
    //     dispatch(
    //       setPromoValidationMsg(
    //         `Мінімальна сума замовлення для промокоду: ${promo.minOrderTotal} грн`,
    //       ),
    //     );
    //     return;
    //   }

    //   // Промокод валідний — застосовуємо
    //   dispatch(applyPromoCode(trimmedCode));
    //   dispatch(markPromoCodeUsed(trimmedCode));
    //   dispatch(setPromoValidationMsg(null));
    // };
  };
  return (
    <div className="">
      <div className="">
        <h3 className="">У вас є промокод для знижки?</h3>

        <div className="">
          <div className="">
            <input
              type="text"
              placeholder="Промокод для знижки"
              className=""
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
            className="hover:bg-dark-black h-[54px] w-[57px] min-w-0 bg-light-black p-0"
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
