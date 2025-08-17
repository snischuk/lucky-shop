// // import type { FC } from 'react';

// // import { UiButton } from '../ui/UiButton';

// // export const CartSummary: FC = () => {
// //   return (
// //     <div className="flex w-[395px] flex-col gap-[18px] border p-5 font-family-secondary text-[18px] leading-[1.17] text-light-black">
// //       <div className="flex justify-between">
// //         <p>Вартість замовлення</p>
// //         <p> грн</p>
// //       </div>
// //       <div className="flex justify-between">
// //         <p>Знижка</p>
// //         <p> грн</p>
// //       </div>
// //       <hr className="border-t border-black" />

// //       <div className="flex justify-between font-bold">
// //         <p>Разом до оплати</p>
// //         <p> грн</p>
// //       </div>

// //       <UiButton variant="filled">ОФОРМИТИ ЗАМОВЛЕННЯ</UiButton>
// //     </div>
// //   );
// // };
// import type { FC } from 'react';

// import { UiButton } from '../ui/UiButton';
// import { useTypedSelector } from '../../hooks/useRedux';
// import { selectCartSummary } from '../../redux/cart/selectors';

// export const CartSummary: FC = () => {
//   const {
//     total,
//     totalOld,
//     discountFromPromo,
//     grandTotal,
//     savingsVsOld,
//     promoMsg,
//     promoOk,
//   } = useTypedSelector(selectCartSummary);

//   return (
//     <div className="flex w-[395px] flex-col gap-[18px] border p-5 font-family-secondary text-[18px] leading-[1.17] text-light-black">
//       {totalOld > total && (
//         <div className="flex justify-between text-[14px] text-grey">
//           <p>Було (стара ціна)</p>
//           <p className="line-through">{totalOld.toFixed(2)} грн</p>
//         </div>
//       )}

//       <div className="flex justify-between">
//         <p>Вартість замовлення</p>
//         <p>{total.toFixed(2)} грн</p>
//       </div>

//       <div className="flex justify-between">
//         <p>Знижка</p>
//         <p>-{(discountFromPromo || 0).toFixed(2)} грн</p>
//       </div>

//       <hr className="border-t border-black" />

//       <div className="flex justify-between font-bold">
//         <p>Разом до оплати</p>
//         <p>{grandTotal.toFixed(2)} грн</p>
//       </div>
//       {promoMsg && (
//         <p
//           className={`text-[14px] ${promoOk ? 'text-green-700' : 'text-red-600'}`}
//         >
//           {promoMsg}
//         </p>
//       )}

//       <UiButton variant="filled">ОФОРМИТИ ЗАМОВЛЕННЯ</UiButton>
//     </div>
//   );
// };
import type { FC } from 'react';

import { useTypedSelector } from '../../hooks/useRedux';
import { selectCartSummary } from '../../redux/cart/selectors';
import { UiButton } from '../ui/UiButton';

export const CartSummary: FC = () => {
  const {
    total,
    totalOld,
    discountFromPromo,
    grandTotal,
    // savingsVsOld,
    promoMsg,
    promoOk,
  } = useTypedSelector(selectCartSummary);

  return (
    <div className="flex w-[395px] flex-col gap-[18px] border p-5 font-family-secondary text-[18px] leading-[1.17] text-light-black">
      {totalOld > total && (
        <div className="flex justify-between text-[14px] text-grey">
          <p>Було (стара ціна)</p>
          <p className="line-through">{totalOld.toFixed(2)} грн</p>
        </div>
      )}

      <div className="flex justify-between">
        <p>Вартість замовлення</p>
        <p>{total.toFixed(2)} грн</p>
      </div>

      <div className="flex justify-between">
        <p>Знижка</p>
        <p>-{(discountFromPromo || 0).toFixed(2)} грн</p>
      </div>

      <hr className="border-t border-black" />

      <div className="flex justify-between font-bold">
        <p>Разом до оплати</p>
        <p>{grandTotal.toFixed(2)} грн</p>
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
