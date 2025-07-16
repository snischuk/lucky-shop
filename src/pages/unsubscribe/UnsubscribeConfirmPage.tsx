import type { FC } from 'react';
import { Link } from 'react-router-dom';

import unsubscribeConfirm from '../../assets/images/unsubscribe/unsubscribe-confirm.jpg';
import { UiLink } from '../../components/ui/UiLink';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';

const UnsubscribeConfirmPage: FC = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle as="h1">Ви впевнені, що хочете відписатися?</UiTitle>

        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Ми будемо сумувати! Без наших листів ви можете пропустити нові
          колекції, знижки та ексклюзивні пропозиції від Lucky
        </p>

        <UiLink
          className="max-w-[330px]"
          variant="filled"
          as={Link}
          to={PATH_PAGES.UNSUBSCRIPTION_CANCEL}
        >
          Залишитися з нами
        </UiLink>

        <UiLink
          className="max-w-[330px]"
          variant="bordered"
          // as='button'
          // onClick={() => console.log('unsubscribe')}
          as={Link}
          to={PATH_PAGES.UNSUBSCRIPTION_SUCCESS}
        >
          Відписатися
        </UiLink>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={unsubscribeConfirm}
        alt="Auth choice"
        width="590"
      />
    </div>
  );
};

export { UnsubscribeConfirmPage };
