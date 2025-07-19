import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import type { FieldErrors } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import IconEmail from '../assets/images/icons/icon-email.svg?react';
import { PATH_PAGES } from '../constants/pathPages';
import { getFriendlySubscriptionMessage } from '../helpers/getFriendlySubscriptionMessage';
import { useHandleApiError } from '../hooks/useHandleApiError';
import { useModal } from '../hooks/useModal';
import { subscribeSchema } from '../schemas/validationSchemas';
import { useSubscribeMutation } from '../services/notificationApi';
import { UiButton } from './ui/UiButton';
import { UiModal } from './ui/UiModal';
import { UiTitle } from './ui/UiTitle';

type FormData = {
  email: string;
};

const SectionSubscribe: FC = () => {
  const [subscribe] = useSubscribeMutation();
  const handleApiError = useHandleApiError();

  const { isModalOpen, modalMessage, isError, openModal, closeModal } =
    useModal();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(subscribeSchema),
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      const { message } = await subscribe({ email: data.email }).unwrap();
      reset();
      const friendlyMessage = getFriendlySubscriptionMessage(message);
      openModal(friendlyMessage, false, PATH_PAGES.MAIN);
    } catch (error: unknown) {
      const { message, isRedirected } = handleApiError(error);
      if (isRedirected) return;
      const friendlyMessage = getFriendlySubscriptionMessage(message);
      setError('email', { type: 'manual', message: friendlyMessage });
      openModal(friendlyMessage, true);
    }
  };

  const onError = (formErrors: FieldErrors<FormData>): void => {
    const firstErrorMessage =
      Object.values(formErrors)[0]?.message || 'Помилка валідації';
    openModal(firstErrorMessage as string, true);
  };

  return (
    <>
      <section>
        <div className="mx-auto flex max-w-custom-1440 flex-wrap items-center justify-between gap-4 bg-light-black px-[114px] py-10">
          <UiTitle className="max-w-[587px] text-main" as="h2">
            Залишайся з нами, щоб першим отримувати пропозиції
          </UiTitle>
          <form
            className="flex w-full max-w-[379px] flex-col gap-[14px]"
            onSubmit={handleSubmit(onSubmit, onError)}
            noValidate
          >
            <div className="relative w-full transition-colors duration-default focus-within:text-grey">
              <IconEmail
                className="absolute left-4 top-1/2 -translate-y-1/2"
                width={20}
              />
              <input
                {...register('email')}
                className="text-l w-full py-5 pl-12 pr-6 font-family-secondary leading-normal text-light-black placeholder:text-grey"
                type="text"
                placeholder="Введіть свою email адресу"
                aria-invalid={!!errors.email}
              />
            </div>

            <UiButton
              variant="bordered"
              className="border-main px-6 py-5 text-[20px] leading-[1.17] text-main"
              type="submit"
              disabled={isSubmitting}
            >
              Підписатися
            </UiButton>
          </form>
        </div>
      </section>

      <UiModal
        title="Підписка"
        open={isModalOpen}
        onOpenChange={(open) => {
          if (!open) closeModal();
        }}
        isError={isError}
        message={modalMessage}
        onConfirm={closeModal}
        confirmButtonText="OK"
      />
    </>
  );
};

export { SectionSubscribe };
