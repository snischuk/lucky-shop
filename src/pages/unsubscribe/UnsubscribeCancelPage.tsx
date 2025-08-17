import type { FC } from 'react';
import { Link } from 'react-router-dom';

import unsubscribeCancel from '../../assets/images/unsubscribe/unsubscribe-cancel.jpg';
import { ButtonPreviousPage } from '../../components/ButtonPreviousPage';
import { UiLink } from '../../components/ui/UiLink';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const UnsubscribeCancelPage: FC = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col px-7 py-6">
        <ButtonPreviousPage className="self-start" />

        <UiTitle as="h1" className="mt-6">
          <span className="block w-full">Дякуємо,</span>
          <span>що залишаєтесь з Lucky!</span>
        </UiTitle>

        <p className="mt-6 font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Дякуємо, що залишаєтесь. Ми й далі надсилатимемо вам стильні новинки,
          сезонні підбірки та вигідні пропозиції - тільки найкраще, без зайвого!
        </p>

        <UiLink
          className="mt-10 max-w-[330px] text-[20px] leading-[1.175]"
          variant="filled"
          as={Link}
          to={PATH_PAGES.MAIN}
        >
          Перейти на головну
        </UiLink>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={unsubscribeCancel}
        alt="Auth choice"
        width="590"
      />
    </div>
  );
};

export { UnsubscribeCancelPage };
