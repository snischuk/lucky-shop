import type { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import unsubscribeSuccess from '../../assets/images/unsubscribe/unsubscribe-success.jpg';
import { ButtonPreviousPage } from '../../components/ButtonPreviousPage';
import { UiButton } from '../../components/ui/UiButton';
import { UiLink } from '../../components/ui/UiLink';
import { UiModal } from '../../components/ui/UiModal';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';
import { getEmailFromJWT } from '../../helpers/getEmailFromJWT';
import { useHandleApiError } from '../../hooks/useHandleApiError';
import { useModal } from '../../hooks/useModal';
import { useSubscribeMutation } from '../../services/notificationApi';

const UnsubscribeSuccessPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [subscribe, { isLoading }] = useSubscribeMutation();
  const handleApiError = useHandleApiError();

  const {
    isModalOpen,
    modalMessage,
    isError,
    openModal,
    closeModal,
    confirmModal,
  } = useModal();

  const token = location.state?.token as string;
  if (!token) {
    navigate(PATH_PAGES.BAD_REQUEST);
    return null;
  }

  const email = getEmailFromJWT(token);
  if (!email) {
    navigate(PATH_PAGES.BAD_REQUEST);
    return null;
  }

  const handleSubscribe = async (): Promise<void> => {
    try {
      const { message } = await subscribe({ email }).unwrap();
      openModal(message, false, PATH_PAGES.MAIN, 'На головну');
    } catch (error: unknown) {
      handleApiError(error);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col px-7 py-6">
        <ButtonPreviousPage className="self-start" />

        <UiTitle as="h1" className="mt-6">
          Ви успішно відписалися!
        </UiTitle>

        <p className="mt-6 max-w-[670px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          <span className="block w-full">Дякуємо, що були з нами!</span>Якщо
          передумаєте - завжди можна повернутись і знову отримувати новини від
          Lucky.
        </p>

        <UiButton
          className="mt-10 max-w-[330px] text-[20px] leading-[1.175]"
          variant="filled"
          onClick={handleSubscribe}
          disabled={isLoading}
        >
          Підписатися знову
        </UiButton>

        <UiLink
          className="mt-3 max-w-[330px] text-[20px] leading-[1.175]"
          variant="bordered"
          as={Link}
          to={PATH_PAGES.MAIN}
        >
          Перейти на головну
        </UiLink>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={unsubscribeSuccess}
        alt="Auth choice"
        width="590"
      />

      <UiModal
        title="Підписка"
        open={isModalOpen}
        onOpenChange={(open) => {
          if (!open) closeModal();
        }}
        isError={isError}
        message={modalMessage}
        onConfirm={confirmModal}
        confirmButtonText="На головну"
        redirectPath={PATH_PAGES.MAIN}
      />
    </div>
  );
};

export { UnsubscribeSuccessPage };
