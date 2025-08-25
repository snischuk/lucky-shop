// import { type FC, useState } from 'react';

// import IconArrowRight from '../../assets/images/icons/icon-arrow-right.svg?react';
// import type { PromoCode as PromoCodeType } from '../../data/mockPromoCodes';
// import { mockPromoCodes } from '../../data/mockPromoCodes';
// import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux';
// import { selectCartTotal, selectPromoCode } from '../../redux/cart/selectors';
// import { applyPromoCode } from '../../redux/cart/slice';
// import { UiButton } from '../ui/UiButton';

// const PromoCode: FC = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const dispatch = useTypedDispatch();
//   const selectedCode = useTypedSelector(selectPromoCode);
//   const total = useTypedSelector(selectCartTotal);

//   // 🔧 FIX 1: правильна формула відсоткової знижки
//   const calculateDiscount = (promo: PromoCodeType, sum: number): number => {
//     if (promo.discountType === 'percent') {
//       return Math.round(sum * (promo.value / 100));
//     }
//     if (promo.discountType === 'fixed') {
//       return Math.min(promo.value, sum);
//     }
//     return 0;
//   };

//   const handleApply = (): void => {
//     const trimmedCode = inputValue.trim().toUpperCase();

//     if (!trimmedCode) {
//       setErrorMessage('Введіть промокод');
//       return;
//     }

//     const promo = mockPromoCodes.find(
//       (p: PromoCodeType) => p.code.toUpperCase() === trimmedCode,
//     );

//     if (!promo) {
//       setErrorMessage('Промокод не знайдено');
//       return;
//     }

//     if (!promo.isActive) {
//       setErrorMessage('Промокод не активний');
//       return;
//     }

//     // 🔧 FIX 2: перевірка дати без таймзон — по 'YYYY-MM-DD'
//     if (promo.expiresAt) {
//       const todayStr = new Date().toISOString().slice(0, 10);
//       if (promo.expiresAt < todayStr) {
//         setErrorMessage('Термін дії промокоду завершився');
//         return;
//       }
//     }

//     if (promo.minOrderTotal && total < promo.minOrderTotal) {
//       setErrorMessage('Не відповідає мінімальній сумі замовлення');
//       return;
//     }

//     if (promo.isUsed) {
//       setErrorMessage('Промокод вже використано');
//       return;
//     }

//     // Якщо всі перевірки пройшли — застосовуємо промокод
//     setErrorMessage(null);
//     dispatch(applyPromoCode(trimmedCode));
//   };

//   // Відображення поточно застосованого коду + локальний розрахунок суми знижки
//   const appliedPromo = selectedCode
//     ? mockPromoCodes.find(
//         (p) => p.code.toUpperCase() === selectedCode.toUpperCase(),
//       )
//     : null;
//   const discount = appliedPromo ? calculateDiscount(appliedPromo, total) : 0;

//   return (
//     <div className="w-[395px]">
//       <div className="w-full">
//         <h3 className="mb-[12px] h-[60px] font-family-primary text-h4 uppercase text-light-black">
//           У вас є промокод для знижки?
//         </h3>

//         <div className="flex h-[54px] w-full items-center justify-between border border-light-grey">
//           <div className="w-[251px] text-[18px] leading-[1.4]">
//             <input
//               type="text"
//               placeholder="Промокод для знижки"
//               className="h-[54px] w-full cursor-text bg-transparent px-[10px] outline-none placeholder:text-grey"
//               value={inputValue}
//               onChange={(e) => {
//                 setInputValue(e.target.value);
//                 if (errorMessage) setErrorMessage(null);
//               }}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   e.preventDefault();
//                   handleApply();
//                 }
//               }}
//             />
//           </div>

//           <UiButton
//             onClick={handleApply}
//             className="hover:bg-dark-black h-[54px] w-[57px] min-w-0 bg-light-black p-0 text-white"
//             aria-label="Застосувати промокод"
//           >
//             <IconArrowRight className="h-[16px] w-[39px]" />
//           </UiButton>
//         </div>
//       </div>

//       {selectedCode && !errorMessage && (
//         <p className="mt-1">
//           ✅ Промокод застосовано: <strong>{selectedCode}</strong>
//           <br />
//           Знижка: {discount} грн
//         </p>
//       )}

//       {errorMessage && <p className="mt-2 text-red">❌ {errorMessage}</p>}
//     </div>
//   );
// };

// export { PromoCode };
import { type FC, useState } from 'react';

import IconArrowRight from '../../assets/images/icons/icon-arrow-right.svg?react';
import type { PromoCode as PromoCodeType } from '../../data/mockPromoCodes';
import { mockPromoCodes } from '../../data/mockPromoCodes';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux';
import { selectCartTotal, selectPromoCode } from '../../redux/cart/selectors';
import { applyPromoCode } from '../../redux/cart/slice';
import { UiButton } from '../ui/UiButton';

const PromoCode: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useTypedDispatch();
  const selectedCode = useTypedSelector(selectPromoCode);
  const total = useTypedSelector(selectCartTotal);

  // ✅ ДОДАНО: локальний прапорець "щойно застосовано".
  // Він живе тільки в оперативній пам'яті (не персиститься),
  // тому після перезавантаження сторінки стає false і банер не з'являється.
  const [wasJustApplied, setWasJustApplied] = useState(false);

  // (не чіпаю твою логіку) правильна формула відсоткової знижки
  const calculateDiscount = (promo: PromoCodeType, sum: number): number => {
    if (promo.discountType === 'percent') {
      return Math.round(sum * (promo.value / 100));
    }
    if (promo.discountType === 'fixed') {
      return Math.min(promo.value, sum);
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

    // (не чіпаю твою перевірку) дата у форматі 'YYYY-MM-DD'
    if (promo.expiresAt) {
      const todayStr = new Date().toISOString().slice(0, 10);
      if (promo.expiresAt < todayStr) {
        setErrorMessage('Термін дії промокоду завершився');
        return;
      }
    }

    if (promo.minOrderTotal && total < promo.minOrderTotal) {
      setErrorMessage('Не відповідає мінімальній сумі замовлення');
      return;
    }

    if (promo.isUsed) {
      setErrorMessage('Промокод вже використано');
      return;
    }

    // ✅ якщо все ок — застосовуємо та відмічаємо, що це було "щойно"
    setErrorMessage(null);
    dispatch(applyPromoCode(trimmedCode));
    setWasJustApplied(true); // ← головне: банер показується тільки в цій сесії
  };

  // Відображення поточно застосованого коду + локальний розрахунок суми знижки
  const appliedPromo = selectedCode
    ? mockPromoCodes.find(
        (p) => p.code.toUpperCase() === selectedCode.toUpperCase(),
      )
    : null;
  const discount = appliedPromo ? calculateDiscount(appliedPromo, total) : 0;

  return (
    <div className="w-[395px]">
      <div className="w-full">
        <h3 className="mb-[12px] h-[60px] font-family-primary text-h4 uppercase text-light-black">
          У вас є промокод для знижки?
        </h3>

        <div className="flex h-[54px] w-full items-center justify-between border border-light-grey">
          <div className="w-[251px] text-[18px] leading-[1.4]">
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

      {/* ⬇️ БУЛО: {selectedCode && !errorMessage && ( ... )} */}
      {/* ✅ СТАЛО: показуємо "застосовано" лише якщо щойно застосували у цій сесії */}
      {selectedCode && wasJustApplied && !errorMessage && (
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
