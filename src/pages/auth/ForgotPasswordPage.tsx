import type { FC } from 'react';
import { Link } from 'react-router-dom';

import forgotPassword from '../../assets/images/auth/forgot-password.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const ForgotPasswordPage: FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-7/12 flex-shrink-0 flex-col px-7 py-16">
        <UiTitle>Отримати пароль</UiTitle>

        <p className="mt-6 max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Ми надішлемо вам електронне повідомлення з інструкціями для його
          відновлення
        </p>

        <form className="mt-10 w-full max-w-[424px]">
          <div className="flex flex-col transition-colors duration-default focus-within:text-grey">
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

          <UiButton
            className="mt-6 max-w-[424px]"
            variant="contained"
            as="button"
            type="submit"
          >
            Надіслати
          </UiButton>
        </form>

        <UiButton
          className="mt-3 max-w-[424px]"
          variant="outlined"
          as={Link}
          to={PATH_PAGES.RESEND_PASSWORD}
        >
          Не отримали лист?
        </UiButton>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={forgotPassword}
        alt="Auth forgot password"
        width="590"
      />
    </div>
  );
};

export { ForgotPasswordPage };
