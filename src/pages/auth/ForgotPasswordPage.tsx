import type { FC } from 'react';
import { Link } from 'react-router-dom';

import forgotPassword from '../../assets/images/auth/forgot-password.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const ForgotPasswordPage: FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle>Отримати пароль</UiTitle>

        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Ми надішлемо вам електронне повідомлення з інструкціями для його
          відновлення
        </p>

        <UiButton
          className="max-w-[330px]"
          variant="contained"
          as={'button'}
          type="submit"
        >
          Надіслати
        </UiButton>

        <UiButton
          className="max-w-[330px]"
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
