import type { FC } from 'react';
import { Link } from 'react-router-dom';

import choice from '../../assets/images/auth/choice.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const AuthChoicePage: FC = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle>Насолоджуйтесь найкращим шопінгом разом з Lucky</UiTitle>

        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Увійдіть або зареєструйтесь, щоб насолодитися персоналізованим
          шопінгом і доступом до всіх наших послуг
        </p>

        <UiButton
          className="max-w-[330px]"
          variant="filled"
          as={Link}
          to={PATH_PAGES.LOGIN}
        >
          Увійти
        </UiButton>

        <UiButton
          className="max-w-[330px]"
          variant="bordered"
          as={Link}
          to={PATH_PAGES.REGISTER}
        >
          Зареєструватися
        </UiButton>
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
