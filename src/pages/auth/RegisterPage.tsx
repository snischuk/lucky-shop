import { yupResolver } from '@hookform/resolvers/yup';
import * as Checkbox from '@radix-ui/react-checkbox';
import type { FC } from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { InferType } from 'yup';

import registerImg from '../../assets/images/auth/register.jpg';
import IconCheckbox from '../../assets/images/icons/icon-checkbox.svg?react';
import IconEyeClosed from '../../assets/images/icons/icon-eye-closed.svg?react';
import IconEyeOpened from '../../assets/images/icons/icon-eye-opened.svg?react';
import IconGoogle from '../../assets/images/icons/icon-google.svg?react';
import { ButtonPreviousPage } from '../../components/ButtonPreviousPage';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';
import { registerSchema } from '../../schemas/validationSchemas';

type RegisterFormData = InferType<typeof registerSchema>;

const RegisterPage: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      policyConsent: false,
      marketingConsent: false,
    },
  });

  const onSubmit = (data: RegisterFormData): void => {
    console.log('Register data:', data);
    // TODO: Виклик API реєстрації
  };

  const handlePasswordVisibility = (): void => {
    setIsShowPassword((prev) => !prev);
  };

  const handleConfirmPasswordVisibility = (): void => {
    setIsShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col items-center gap-5 px-7 py-6">
        <ButtonPreviousPage className="self-start" />

        <UiTitle>Зареєструйтеся</UiTitle>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-[424px] flex-col items-center"
        >
          <div className="mt-[12px] flex h-[106px] w-full max-w-[424px] flex-col transition-colors duration-default focus-within:text-grey">
            <label
              className="font-family-secondary text-[18px] leading-[1.27] text-light-black"
              htmlFor="firstName"
            >
              Імʼя
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Ваше імʼя"
              {...register('firstName')}
              className={`mt-3 w-full border px-6 py-[14px] font-family-secondary placeholder:text-grey ${
                errors.firstName
                  ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                  : 'border-medium-grey text-light-black'
              }`}
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div className="mt-[12px] flex h-[106px] w-full max-w-[424px] flex-col transition-colors duration-default focus-within:text-grey">
            <label
              className="font-family-secondary text-[18px] leading-[1.27] text-light-black"
              htmlFor="lastName"
            >
              Прізвище
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Ваше прізвище"
              {...register('lastName')}
              className={`mt-3 w-full border px-6 py-[14px] font-family-secondary placeholder:text-grey ${
                errors.lastName
                  ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                  : 'border-medium-grey text-light-black'
              }`}
              aria-invalid={!!errors.lastName}
            />
            {errors.lastName && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.lastName.message}
              </span>
            )}
          </div>

          <div className="mt-[12px] flex h-[106px] w-full max-w-[424px] flex-col transition-colors duration-default focus-within:text-grey">
            <label
              className="font-family-secondary text-[18px] leading-[1.27] text-light-black"
              htmlFor="email"
            >
              Адреса Ел. пошти
            </label>
            <input
              id="email"
              type="text"
              placeholder="Адреса Ел. пошти"
              {...register('email')}
              className={`mt-3 w-full border px-6 py-[14px] font-family-secondary placeholder:text-grey ${
                errors.email
                  ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                  : 'border-medium-grey text-light-black'
              }`}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mt-[12px] flex h-[110px] w-full flex-col">
            <label
              htmlFor="password"
              className="font-family-secondary text-[18px] leading-[1.27] text-light-black"
            >
              Пароль
            </label>
            <div className="relative mt-3">
              <input
                id="password"
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Уведіть свій пароль"
                {...register('password')}
                className={`w-full border py-[14px] pl-6 pr-[72px] font-family-secondary placeholder:text-grey ${
                  errors.password
                    ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                    : 'border-medium-grey text-light-black'
                }`}
                aria-invalid={!!errors.password}
              />
              <UiButton
                type="button"
                onClick={handlePasswordVisibility}
                className="absolute right-6 top-1/2 -translate-y-1/2"
                variant="iconOnly"
                icon={isShowPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              />
            </div>
            {errors.password && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mt-[12px] flex h-[110px] w-full flex-col">
            <label
              htmlFor="confirmPassword"
              className="font-family-secondary text-[18px] leading-[1.27] text-light-black"
            >
              Підтвердити пароль
            </label>
            <div className="relative mt-3">
              <input
                id="confirmPassword"
                type={isShowConfirmPassword ? 'text' : 'password'}
                placeholder="Підтвердіть новий пароль"
                {...register('confirmPassword')}
                className={`w-full border py-[14px] pl-6 pr-[72px] font-family-secondary placeholder:text-grey ${
                  errors.confirmPassword
                    ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                    : 'border-medium-grey text-light-black'
                }`}
                aria-invalid={!!errors.confirmPassword}
              />
              <UiButton
                type="button"
                onClick={handleConfirmPasswordVisibility}
                className="absolute right-6 top-1/2 -translate-y-1/2"
                variant="iconOnly"
                icon={
                  isShowConfirmPassword ? <IconEyeOpened /> : <IconEyeClosed />
                }
              />
            </div>
            {errors.confirmPassword && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Controller
            name="marketingConsent"
            control={control}
            render={({ field }) => (
              <div className="mt-[12px] flex items-center gap-2">
                <Checkbox.Root
                  id="marketingConsent"
                  checked={field.value !== null ? field.value : false}
                  onCheckedChange={field.onChange}
                  className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded border border-medium-grey outline-none transition-colors duration-default hover:border-light-grey focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[webkit-focus-ring-color] data-[state=checked]:border-grey"
                >
                  <span className="relative h-full w-full">
                    <Checkbox.Indicator
                      forceMount
                      className="absolute inset-0 flex scale-95 items-center justify-center text-grey opacity-0 transition-all duration-default data-[state=checked]:scale-100 data-[state=checked]:opacity-100"
                    >
                      <IconCheckbox />
                    </Checkbox.Indicator>
                  </span>
                </Checkbox.Root>

                <label
                  htmlFor="marketingConsent"
                  className="font-family-secondary text-[14px] leading-[1.17] text-black"
                >
                  Я хочу отримувати персоналізовані повідомлення комерційного
                  характеру від
                  <span className="mx-1 font-semibold">Lucky</span>
                  електронною поштою
                </label>
              </div>
            )}
          />

          <Controller
            name="policyConsent"
            control={control}
            render={({ field }) => (
              <div className="mt-[12px] h-[62px]">
                <div className="flex items-center gap-2">
                  <Checkbox.Root
                    id="policyConsent"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded border border-medium-grey outline-none transition-colors duration-default hover:border-light-grey focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-[webkit-focus-ring-color] data-[state=checked]:border-grey"
                  >
                    <span className="relative h-full w-full">
                      <Checkbox.Indicator
                        forceMount
                        className="absolute inset-0 flex scale-95 items-center justify-center text-grey opacity-0 transition-all duration-default data-[state=checked]:scale-100 data-[state=checked]:opacity-100"
                      >
                        <IconCheckbox />
                      </Checkbox.Indicator>
                    </span>
                  </Checkbox.Root>

                  <label
                    htmlFor="policyConsent"
                    className="font-family-secondary text-[14px] leading-[1.17] text-black"
                  >
                    Я прочитав(-ла) і розумію
                    <a
                      href={PATH_PAGES.PRIVACY_POLICY}
                      className="ml-1 underline"
                    >
                      Політику конфіденційності та використання файлів cookie
                    </a>
                  </label>
                </div>

                {errors.policyConsent && (
                  <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                    {errors.policyConsent.message}
                  </span>
                )}
              </div>
            )}
          />

          <UiButton
            className="mt-[10px] w-full text-[20px] leading-[1.175]"
            variant="filled"
            type="submit"
            disabled={isSubmitting}
          >
            Зареєструватися
          </UiButton>

          <UiButton
            className="mt-3 w-full gap-5 text-[20px] leading-[1.175]"
            variant="bordered"
            type="button"
            icon={<IconGoogle />}
            iconPosition="before"
            disabled={true}
          >
            Зареєструватися через Google
          </UiButton>
        </form>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={registerImg}
        alt="Auth register"
        width="590"
      />
    </div>
  );
};

export { RegisterPage };
