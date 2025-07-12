import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { useState } from 'react';
import type { FieldErrors } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import IconEmail from '../assets/images/icons/icon-email.svg?react';
import { PATH_PAGES } from '../constants/pathPages';
import { subscribeSchema } from '../schemas/validationSchemas';
import { useSubscribeMutation } from '../services/notificationApi';
import { SubscribeModal } from './SubscribeModal';
import { UiButton } from './ui/UiButton';
import { UiLoader } from './ui/UiLoader';
import { UiTitle } from './ui/UiTitle';

type FormData = {
  email: string;
};

type SubscribeApiError = {
  data: { message: string };
  status: number;
};

const SubscribeSection: FC = () => {
  const [subscribe] = useSubscribeMutation();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isError, setIsError] = useState(false);

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
      await subscribe({ email: data.email }).unwrap();
      reset();
      setModalMessage('');
      setIsError(false);
      setIsModalOpen(true);
    } catch (error) {
      let message =
        (error as SubscribeApiError)?.data?.message || 'Помилка підписки';

      if (message === 'Цей email вже підписано.') {
        message = 'Ви вже підписані';
      }
      console.dir(error);
      setError('email', { type: 'manual', message });
      setModalMessage(message);
      setIsError(true);
      setIsModalOpen(true);
    }
  };

  const onError = (formErrors: FieldErrors<FormData>): void => {
    const firstErrorMessage =
      Object.values(formErrors)[0]?.message || 'Помилка валідації';
    setModalMessage(firstErrorMessage as string);
    setIsError(true);
    setIsModalOpen(true);
  };

  const goHome = (): void => {
    setIsModalOpen(false);
    navigate(PATH_PAGES.MAIN);
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
              // className="flex items-center justify-center gap-2 border border-main px-6 py-5 font-family-secondary text-[20px] leading-none text-main transition-colors duration-default hover:border-orange hover:text-orange disabled:pointer-events-none disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <UiLoader color="border-t-main" />
                  Підписуємося...
                </>
              ) : (
                'Підписатися'
              )}
            </UiButton>
          </form>
        </div>
      </section>

      <SubscribeModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        isError={isError}
        message={modalMessage}
        onConfirm={goHome}
      />
    </>
  );
};

export { SubscribeSection };
