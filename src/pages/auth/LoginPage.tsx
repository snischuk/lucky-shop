import type { FC } from 'react';
import { Link } from 'react-router-dom';

import login from '../../assets/images/auth/login.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const LoginPage: FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle>Вхід</UiTitle>

        <Link to={PATH_PAGES.FORGOT_PASSWORD}>Забули пароль?</Link>

        <UiButton
          className="max-w-[330px]"
          variant="contained"
          as={'button'}
          type="submit"
        >
          Увійти
        </UiButton>

        <UiButton
          className="max-w-[330px]"
          variant="outlined"
          as={'button'}
          type="submit"
        >
          Увійти через Google
        </UiButton>
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
