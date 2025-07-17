import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import choice from '../../assets/images/auth/choice.jpg';
import { ButtonPreviousPage } from '../../components/ButtonPreviousPage';
import { UiLink } from '../../components/ui/UiLink';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const AuthChoicePage: FC = () => {
  const location = useLocation();
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col px-7 py-6">
        <ButtonPreviousPage className="self-start" />

        <UiTitle as="h1" className="mt-6">
          Насолоджуйтесь найкращим шопінгом разом з Lucky
        </UiTitle>

        <p className="mt-6 max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Увійдіть або зареєструйтесь, щоб насолодитися персоналізованим
          шопінгом і доступом до всіх наших послуг
        </p>

        <UiLink
          className="mt-11 max-w-[330px] py-5 text-[20px] leading-[1.175]"
          variant="filled"
          as={Link}
          to={PATH_PAGES.LOGIN}
          state={location.state}
        >
          Увійти
        </UiLink>

        <UiLink
          className="mt-3 max-w-[330px] text-[20px] leading-[1.175]"
          variant="bordered"
          as={Link}
          to={PATH_PAGES.REGISTER}
          state={location.state}
        >
          Зареєструватися
        </UiLink>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={choice}
        alt="Auth choice"
        width="590"
      />
    </div>
  );
};

export { AuthChoicePage };
