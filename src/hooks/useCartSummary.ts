import { useTypedSelector } from '../hooks/useRedux';
import {
  selectCartItems,
  selectPromoCode,
  selectUsedPromoCodes,
} from '../redux/cart/selectors';
import { mockPromoCodes } from '../data/mockPromoCodes';
import type { CartItemFull, CartSummaryItem } from '../types/CartItem';

export const useCartSummary = (): CartSummaryItem => {
  const cartItems = useTypedSelector(selectCartItems) as CartItemFull[];
  const promoCode = useTypedSelector(selectPromoCode);
  const usedPromoCodes = useTypedSelector(selectUsedPromoCodes);

  // 1. Загальна вартість без знижок
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // 2. Знижка від старих цін (oldPrice)
  const discountFromOldPrice = cartItems.reduce((sum, item) => {
    if (item.oldPrice !== null && item.oldPrice > item.price) {
      return sum + (item.oldPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);

  // 3. Обробка промокоду: обрізання пробілів і верхній регістр
  const trimmedPromoCode = promoCode?.trim().toUpperCase();

  // 4. Пошук валідного промокоду
  const foundPromo = trimmedPromoCode
    ? mockPromoCodes.find(
        (p) =>
          p.code.toUpperCase() === trimmedPromoCode &&
          p.isActive &&
          !p.isUsed &&
          !usedPromoCodes.includes(p.code.toUpperCase()),
      )
    : null;

  let discountFromPromo = 0;
  let promoValidationMsg: string | null = null;

  const now = new Date();

  // 5. Валідація промокоду
  if (trimmedPromoCode) {
    if (!foundPromo) {
      promoValidationMsg = 'Промокод не знайдено або недійсний';
    } else if (foundPromo.expiresAt && new Date(foundPromo.expiresAt) < now) {
      promoValidationMsg = 'Термін дії промокоду завершився';
    } else if (foundPromo.minOrderTotal && total < foundPromo.minOrderTotal) {
      promoValidationMsg = `Не відповідає мінімальній сумі замовлення (${foundPromo.minOrderTotal} грн)`;
    } else {
      promoValidationMsg = null; // Промокод валідний — очищаємо повідомлення
    }
  }

  // 6. Застосування знижки за промокодом, якщо він валідний
  if (!promoValidationMsg && foundPromo) {
    discountFromPromo =
      foundPromo.discountType === 'percent'
        ? Math.round((foundPromo.value / 100) * total)
        : foundPromo.value;
  }

  // 7. Загальна знижка
  const totalDiscount = discountFromOldPrice + discountFromPromo;

  // 8. Підсумкова сума до оплати (не менше 0)
  const grandTotal = Math.max(total - totalDiscount, 0);

  // Повертаємо типізований обʼєкт з усіма необхідними полями
  return {
    total,
    discountFromOldPrice,
    discountFromPromo,
    discount: totalDiscount, // Корисно для інших, якщо потрібно
    grandTotal,
    promoCode,
    promoValidationMsg,
  };
};
