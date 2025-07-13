import type { FC } from 'react';
import { Link } from 'react-router-dom';

import unsubscribeSuccess from '../../assets/images/unsubscribe/unsubscribe-success.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiLink } from '../../components/ui/UiLink';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const UnsubscribeSuccessPage: FC = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle>Ви успішно відписалися!</UiTitle>

        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Дякуємо, що були з нами! Якщо передумаєте - завжди можна повернутись і
          знову отримувати новини від Lucky.
        </p>

        <UiButton
          className="max-w-[330px]"
          variant="filled"
          // as={Link}
          // to={PATH_PAGES.LOGIN}
          onClick={() => console.log('subscribed again')}
          disabled={false}
        >
          Підписатися знову
        </UiButton>

        <UiLink
          className="max-w-[330px]"
          variant="bordered"
          as={Link}
          to={PATH_PAGES.MAIN}
        >
          Перейти до каталогу
        </UiLink>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={unsubscribeSuccess}
        alt="Auth choice"
        width="590"
      />
    </div>
  );
};

export { UnsubscribeSuccessPage };
