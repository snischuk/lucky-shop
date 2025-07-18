import type { FC } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import unsubscribeConfirm from '../../assets/images/unsubscribe/unsubscribe-confirm.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiLink } from '../../components/ui/UiLink';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';
import { useHandleApiError } from '../../hooks/useHandleApiError';
import { useUnsubscribeMutation } from '../../services/notificationApi';

const UnsubscribeConfirmPage: FC = () => {
  const [searchParams] = useSearchParams();
  const token =
    searchParams.get('token') || '_JNvAhW6QW5c4znKLDKcPPWmUpwRLeYAPqRXqC727qQ';
  const [unsubscribe] = useUnsubscribeMutation();
  const handleApiError = useHandleApiError();
  const navigate = useNavigate();

  const handleUnsubscribe = async (): Promise<void> => {
    console.log('Unsubscribe token:', token);
    if (!token) {
      navigate(PATH_PAGES.NOT_FOUND);
      return;
    }

    try {
      await unsubscribe({ token }).unwrap();
      navigate(PATH_PAGES.UNSUBSCRIPTION_SUCCESS, { state: { token } });
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col px-7 py-16">
        <UiTitle as="h1">Ви впевнені, що хочете відписатися?</UiTitle>

        <p className="mt-6 max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Ми будемо сумувати! Без наших листів ви можете пропустити нові
          колекції, знижки та ексклюзивні пропозиції від Lucky
        </p>

        <UiLink
          className="mt-10 max-w-[330px] text-[20px] leading-[1.175]"
          variant="filled"
          as={Link}
          to={PATH_PAGES.UNSUBSCRIPTION_CANCEL}
        >
          Залишитися з нами
        </UiLink>

        <UiButton
          className="mt-3 max-w-[330px] text-[20px] leading-[1.175]"
          variant="bordered"
          onClick={handleUnsubscribe}
        >
          Відписатися
        </UiButton>
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
