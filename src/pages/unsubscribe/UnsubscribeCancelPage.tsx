import type { FC } from 'react';
import { Link } from 'react-router-dom';

import unsubscribeCancel from '../../assets/images/unsubscribe/unsubscribe-cancel.jpg';
import { UiLink } from '../../components/ui/UiLink';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const UnsubscribeCancelPage: FC = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle as="h1">Дякуємо, що залишаєтесь з Lucky!</UiTitle>

        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Дякуємо, що залишаєтесь. Ми й далі надсилатимемо вам стильні новинки,
          сезонні підбірки та вигідні пропозиції - тільки найкраще, без зайвого!
        </p>

        <UiLink
          className="max-w-[330px]"
          variant="filled"
          as={Link}
          to={PATH_PAGES.MAIN}
        >
          Перейти до каталогу
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
