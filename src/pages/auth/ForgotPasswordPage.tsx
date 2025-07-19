import { yupResolver } from '@hookform/resolvers/yup';
import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import type { InferType } from 'yup';

import forgotPasswordImage from '../../assets/images/auth/forgot-password.jpg';
import { ButtonPreviousPage } from '../../components/ButtonPreviousPage';
import { UiButton } from '../../components/ui/UiButton';
import { UiLink } from '../../components/ui/UiLink';
import { UiModal } from '../../components/ui/UiModal';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';
import { useHandleApiError } from '../../hooks/useHandleApiError';
import { useModal } from '../../hooks/useModal';
import { forgotPasswordSchema } from '../../schemas/validationSchemas';
import { useForgotPasswordMutation } from '../../services/authApi';

type ForgotPasswordFormData = InferType<typeof forgotPasswordSchema>;

const ForgotPasswordPage: FC = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const handleApiError = useHandleApiError();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    isModalOpen,
    modalMessage,
    isError,
    openModal,
    closeModal,
    confirmModal,
  } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (formData: ForgotPasswordFormData): Promise<void> => {
    try {
      await forgotPassword({
        email: formData.email,
      });
      setIsSubmitted(true);
      const message =
        'Інструкції успішно надіслані. Перевірте електронну пошту';
      openModal(message, false, PATH_PAGES.MAIN);
    } catch (error: unknown) {
      handleApiError(error);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col px-7 py-6">
        <ButtonPreviousPage className="self-start" />

        <UiTitle as="h1" className="mt-[26px]">
          Отримати пароль
        </UiTitle>

        <p className="mt-6 max-w-[634px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Ми надішлемо вам електронне повідомлення з інструкціями для його
          відновлення
        </p>

        <form
          className="mt-10 w-full max-w-[424px]"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex h-[106px] flex-col">
            <label
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
              htmlFor="email"
            >
              Адреса Ел. пошти
            </label>
            <input
              id="email"
              type="text"
              placeholder="Адреса Ел. пошти"
              {...register('email')}
              className={`mt-3 w-full border px-6 py-[14px] font-family-secondary text-[18px] leading-[1.17] placeholder:text-grey ${
                errors.email
                  ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                  : 'border-medium-grey text-light-black'
              }`}
              aria-invalid={!!errors.email}
              disabled={isSubmitted}
            />
            {errors.email && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.email.message}
              </span>
            )}
          </div>

          <UiButton
            className="mt-3 w-full max-w-[424px] text-[20px] leading-[1.175]"
            variant="filled"
            type="submit"
            disabled={isSubmitting || isSubmitted}
          >
            Надіслати
          </UiButton>
        </form>

        <UiLink
          className="mt-3 max-w-[424px] text-[20px] leading-[1.175]"
          variant="bordered"
          as={Link}
          to={PATH_PAGES.RESEND_PASSWORD}
        >
          Не отримали лист?
        </UiLink>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={forgotPasswordImage}
        alt="Auth forgot password"
        width="590"
      />

      <UiModal
        title="Отримати пароль"
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

export { ForgotPasswordPage };
