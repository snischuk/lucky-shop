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
  .required('Email є обов’язковим.')
  .matches(EMAIL_REGEX, 'Неправильний формат email (Приклад: name@domain.com).')
  .min(
    EMAIL_MIN_LENGTH,
    `Email повинен містити щонайменше ${EMAIL_MIN_LENGTH} символів.`,
  )
  .max(
    EMAIL_MAX_LENGTH,
    `Email не повинен перевищувати ${EMAIL_MAX_LENGTH} символів.`,
  );

const passwordSchema = yup
  .string()
  .required('Пароль є обов’язковим.')
  .matches(
    PASSWORD_REGEX,
    'Пароль має містити одну велику літеру, цифру і спецсимвол.',
  )
  .min(
    PASSWORD_MIN_LENGTH,
    `Пароль має бути не менше ${PASSWORD_MIN_LENGTH} символів.`,
  )
  .max(
    PASSWORD_MAX_LENGTH,
    `Пароль не повинен перевищувати ${PASSWORD_MAX_LENGTH} символів.`,
  );

const getNameSchema = (fieldLabel: string) =>
  yup
    .string()
    .notRequired()
    .nullable()
    .matches(NAME_REGEX, {
      message: `${fieldLabel} може містити лише літери, пробіли й дефіси.`,
      excludeEmptyString: true,
    })
    .max(
      NAME_MAX_LENGTH,
      `${fieldLabel} не повинно перевищувати ${NAME_MAX_LENGTH} символів.`,
    );

const getConfirmPasswordSchema = (refField: string) =>
  yup
    .string()
    .required('Підтвердження пароля обов’язкове.')
    .oneOf([yup.ref(refField)], 'Паролі мають збігатися.');

const policyConsentSchema = yup
  .boolean()
  .oneOf([true], 'Політика конфіденційності є обов’язковою.');

const marketingConsentSchema = yup.boolean().nullable().default(false);

export const subscribeSchema = yup.object({
  email: emailSchema,
});

export const registerSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: getConfirmPasswordSchema('password'),
  policyConsent: policyConsentSchema,
  marketingConsent: marketingConsentSchema,
  firstName: getNameSchema('Ім’я'),
  lastName: getNameSchema('Прізвище'),
});

export const loginSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export const forgotPasswordSchema = yup.object({
  email: emailSchema,
});

export const resendPasswordSchema = yup.object({
  email: emailSchema,
});

export const newPasswordSchema = yup.object({
  newPassword: passwordSchema,
  confirmPassword: getConfirmPasswordSchema('newPassword'),
});
