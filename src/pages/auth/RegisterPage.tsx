import type { FC } from 'react';
import { useState } from 'react';

import register from '../../assets/images/auth/register.jpg';
import IconEyeClosed from '../../assets/images/icons/icon-eye-closed.svg?react';
import IconEyeOpened from '../../assets/images/icons/icon-eye-opened.svg?react';
import IconGoogle from '../../assets/images/icons/icon-google.svg?react';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';

const RegisterPage: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const handleToggleNewPassword = (): void => {
    setIsShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = (): void => {
    setIsShowConfirmPassword((prev) => !prev);
  };
  return (
    <div className="flex w-full">
      <div className="flex w-7/12 flex-shrink-0 flex-col items-center gap-6 px-7 py-16">
        <UiTitle>Зареєструйтеся</UiTitle>

        <form action="" className="flex w-full max-w-[424px] flex-col">
          <div className="flex flex-col transition-colors duration-default focus-within:text-grey">
            <label
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
              htmlFor="firstName"
            >
              Імʼя
            </label>
            <input
              id="firstName"
              // {...register('email')}
              className="mt-3 w-full border border-medium-grey px-6 py-[14px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
              type="text"
              placeholder="Ваше імʼя"
              // aria-invalid={!!errors.email}
            />
            {/* <span className="text-dark-red mt-[2px] font-family-secondary text-[14px] leading-[1.17]">
            Введіть коректне імʼя
          </span> */}
          </div>

          <div className="mt-[10px] flex flex-col transition-colors duration-default focus-within:text-grey">
            <label
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
              htmlFor="lastName"
            >
              Прізвище
            </label>
            <input
              id="lastName"
              // {...register('email')}
              className="mt-3 w-full border border-medium-grey px-6 py-[14px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
              type="text"
              placeholder="Ваше прізвище"
              // aria-invalid={!!errors.email}
            />
            {/* <span className="text-dark-red mt-[2px] font-family-secondary text-[14px] leading-[1.17]">
            Введіть коректне прізвище
          </span> */}
          </div>

          <div className="mt-[10px] flex flex-col transition-colors duration-default focus-within:text-grey">
            <label
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
              htmlFor="email"
            >
              Адреса Ел. пошти
            </label>
            <input
              id="email"
              // {...register('email')}
              className="mt-3 w-full border border-medium-grey px-6 py-[14px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
              type="text"
              placeholder="Адреса Ел. пошти"
              // aria-invalid={!!errors.email}
            />
            {/* <span className="text-dark-red mt-[2px] font-family-secondary text-[14px] leading-[1.17]">
            Введіть дійсну електронну адресу
          </span> */}
          </div>

          <div className="mt-[10px] flex w-full flex-col transition-colors duration-default focus-within:text-grey">
            <label
              htmlFor="newPassword"
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
            >
              Пароль
            </label>
            <div className="relative mt-3">
              <input
                id="newPassword"
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Уведіть свій пароль"
                className="w-full border border-medium-grey py-[14px] pl-6 pr-[72px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
              />
              <button
                type="button"
                onClick={handleToggleNewPassword}
                className="absolute right-6 top-1/2 -translate-y-1/2"
              >
                {isShowPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </button>
            </div>
            <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
              Не вірний пароль.
            </span>
          </div>

          <div className="mt-[10px] flex w-full flex-col transition-colors duration-default focus-within:text-grey">
            <label
              htmlFor="confirmPassword"
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
            >
              Підтвердити пароль
            </label>
            <div className="relative mt-3">
              <input
                id="confirmPassword"
                type={isShowConfirmPassword ? 'text' : 'password'}
                placeholder="Підтвердіть пароль"
                className="w-full border border-medium-grey py-[14px] pl-6 pr-[72px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
              />
              <button
                type="button"
                onClick={handleToggleConfirmPassword}
                className="absolute right-6 top-1/2 -translate-y-1/2"
              >
                {isShowConfirmPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </button>
            </div>
            <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
              Не вірний пароль.
            </span>
          </div>

          <div className="mt-6 flex items-baseline gap-2">
            <input
              type="checkbox"
              name="marketingConsent"
              id="marketingConsent"
            />
            <label
              htmlFor="marketingConsent"
              className="font-family-secondary text-[14px] leading-[1.17] text-black"
            >
              Я хочу отримувати персоналізовані повідомлення комерційного
              характеру від <span className="font-semibold">Lucky</span>{' '}
              електронною поштою
            </label>
          </div>

          <div className="mt-6 flex items-baseline gap-2">
            <input
              type="checkbox"
              name="privacyConsent"
              id="privacyConsent"
              className="h-4 w-4"
            />
            <label
              htmlFor="privacyConsent"
              className="font-family-secondary text-[14px] leading-[1.17] text-black"
            >
              Я прочитав(-ла) і розумію
              <a href="#" className="underline">
                Політику конфіденційності та використання файлів cookie
              </a>
            </label>
          </div>

          <UiButton
            className="mt-6"
            variant="contained"
            as="button"
            type="submit"
          >
            Зареєструватися
          </UiButton>

          <UiButton
            className="relative mt-3"
            variant="outlined"
            as="button"
            type="submit"
          >
            <IconGoogle className="absolute left-6 top-1/2 -translate-y-1/2" />
            Зареєструватися через Google
          </UiButton>
        </form>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={register}
        alt="Auth register"
        width="590"
      />
    </div>
  );
};

export { RegisterPage };
