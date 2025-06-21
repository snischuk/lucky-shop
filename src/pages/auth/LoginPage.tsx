import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

import login from '../../assets/images/auth/login.jpg';
import IconEyeClosed from '../../assets/images/icons/icon-eye-closed.svg?react';
import IconEyeOpened from '../../assets/images/icons/icon-eye-opened.svg?react';
import IconGoogle from '../../assets/images/icons/icon-google.svg?react';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const LoginPage: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePasswordVisibility = (): void => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <div className="flex w-full">
      <div className="align-center flex w-7/12 flex-shrink-0 flex-col items-center gap-6 px-7 py-16">
        <UiTitle>Вхід</UiTitle>

        <form
          className="flex w-full max-w-[424px] flex-col items-center"
          action=""
          method="post"
        >
          <div className="flex w-full max-w-[424px] flex-col transition-colors duration-default focus-within:text-grey">
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

          <div className="mt-[10px] flex w-full max-w-[424px] flex-col transition-colors duration-default focus-within:text-grey">
            <label
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
              htmlFor="password"
            >
              Пароль
            </label>
            <div className="relative mt-3">
              <input
                id="password"
                className="w-full border border-medium-grey py-[14px] pl-6 pr-[72px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Уведіть свій пароль"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-6 top-1/2 -translate-y-1/2"
              >
                {isShowPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </button>
            </div>
            <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
              Не вірний пароль.{' '}
              <Link to={PATH_PAGES.FORGOT_PASSWORD}>Забули пароль?</Link>
            </span>
          </div>

          <UiButton
            className="mt-6"
            variant="contained"
            as="button"
            type="submit"
          >
            Увійти
          </UiButton>

          <UiButton
            className="relative mt-3"
            variant="outlined"
            as="button"
            type="submit"
          >
            <IconGoogle className="absolute left-6 top-1/2 -translate-y-1/2" />
            Увійти через Google
          </UiButton>
        </form>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={login}
        alt="Auth login"
        width="590"
      />
    </div>
  );
};

export { LoginPage };
