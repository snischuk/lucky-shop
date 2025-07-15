export const getFriendlySubscriptionMessage = (message: string): string =>
  message === 'Цей email вже підписано.' ? 'Ви вже підписані' : message;
