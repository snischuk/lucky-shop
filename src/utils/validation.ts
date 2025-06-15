import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  EMAIL_REGEX,
  NAME_MAX_LENGTH,
  NAME_REGEX,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from '../constants/validationRules';

export const validateEmail = (email: string): string | null => {
  if (!email) return 'Email є обов’язковим';
  if (email.length < EMAIL_MIN_LENGTH)
    return `Email повинен містити щонайменше ${EMAIL_MIN_LENGTH} символів`;
  if (email.length > EMAIL_MAX_LENGTH)
    return `Email не повинен перевищувати ${EMAIL_MAX_LENGTH} символів`;
  if (!EMAIL_REGEX.test(email))
    return 'Неправильний формат email. Приклад: name@domain.com';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password є обов’язковим';
  if (password.length < PASSWORD_MIN_LENGTH)
    return `Password повинен містити щонайменше ${PASSWORD_MIN_LENGTH} символів`;
  if (password.length > PASSWORD_MAX_LENGTH)
    return `Password не повинен перевищувати ${PASSWORD_MAX_LENGTH} символів`;
  if (!PASSWORD_REGEX.test(password))
    return 'Password повинен містити хоча б одну велику літеру, цифру та спеціальний символ';
  return null;
};

export const validateName = (
  name: string,
  fieldName = 'Name',
): string | null => {
  if (!name) return `${fieldName} є обов’язковим`;
  if (name.length > NAME_MAX_LENGTH)
    return `${fieldName} не повинен перевищувати ${NAME_MAX_LENGTH} символів`;
  if (!NAME_REGEX.test(name)) return `${fieldName} містить недопустимі символи`;
  return null;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string | null => {
  if (!confirmPassword) return 'Confirm Password є обов’язковим';
  if (password !== confirmPassword)
    return 'Confirm Password не співпадає з Password';
  return null;
};
