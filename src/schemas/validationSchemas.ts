import * as yup from 'yup';

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

const emailSchema = yup
  .string()
  .required('Email обов’язковий')
  .matches(EMAIL_REGEX, 'Невірний формат email')
  .min(
    EMAIL_MIN_LENGTH,
    `Email має містити щонайменше ${EMAIL_MIN_LENGTH} символів`,
  )
  .max(
    EMAIL_MAX_LENGTH,
    `Email не повинен перевищувати ${EMAIL_MAX_LENGTH} символів`,
  );

const passwordSchema = yup
  .string()
  .required('Пароль обов’язковий')
  .matches(
    PASSWORD_REGEX,
    'Пароль має містити одну велику літеру, цифру і спецсимвол',
  )
  .min(
    PASSWORD_MIN_LENGTH,
    `Пароль має бути не менше ${PASSWORD_MIN_LENGTH} символів`,
  )
  .max(
    PASSWORD_MAX_LENGTH,
    `Пароль не повинен перевищувати ${PASSWORD_MAX_LENGTH} символів`,
  );

const confirmPasswordSchema = yup
  .string()
  .required('Підтвердження пароля обов’язкове')
  .oneOf([yup.ref('password')], 'Паролі мають збігатися');

const nameSchema = yup
  .string()
  .required('Ім’я обов’язкове')
  .matches(NAME_REGEX, 'Ім’я може містити лише літери, пробіли й дефіси')
  .max(
    NAME_MAX_LENGTH,
    `Ім’я не повинно перевищувати ${NAME_MAX_LENGTH} символів`,
  );

export const subscribeSchema = yup.object({
  email: emailSchema,
});

export const registerSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
  firstName: nameSchema,
  lastName: nameSchema,
});
