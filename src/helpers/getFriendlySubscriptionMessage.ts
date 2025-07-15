export const getFriendlySubscriptionMessage = (
  message: string | null,
): string => {
  if (message === 'Успішно підписано.') {
    return 'Дякуємо!\nВи успішно оформили підписку.';
  }

  if (message === 'Цей email вже підписано.') {
    return 'Ви вже підписані';
  }

  return message ?? '';
};
