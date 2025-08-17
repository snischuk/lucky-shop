import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import type { InferType } from 'yup';

import resendPasswordImage from '../../assets/images/auth/password-resending.jpg';
import { ModalApiFeedback } from '../../components/ModalApiFeedback';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { useHandleApiError } from '../../hooks/useHandleApiError';
import { useModal } from '../../hooks/useModal';
import { forgotPasswordSchema } from '../../schemas/validationSchemas';
import { useForgotPasswordMutation } from '../../services/authApi';

type ResendFormData = InferType<typeof forgotPasswordSchema>;

const ResendPasswordPage: FC = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const handleApiError = useHandleApiError();

  const {
    isModalOpen,
    title,
    modalMessage,
    modalConfirmButtonText,
    openModal,
    closeModal,
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

  const onSubmit = async (formData: ResendFormData): Promise<void> => {
    try {
      await forgotPassword({
        email: formData.email,
      });

      const friendlyMessage =
        'Інструкції повторно надіслані. Перевірте електронну пошту';

      openModal({
        title: 'Повторне надсилання пароля',
        message: friendlyMessage,
        buttonText: 'OK',
      });
    } catch (error: unknown) {
      handleApiError(error);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle as="h1">Повторне надсилання пароля</UiTitle>

        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Ми надіслали вам електронного листа з посиланням для скидання пароля.
          Його отримання може зайняти кілька хвилин. Не забудьте перевірити
          папку “Спам”
        </p>

        <p className="font-family-secondary text-[20px] font-semibold uppercase leading-[1.15] text-black">
          Не отримали лист?
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-6"
        >
          <div className="flex h-[106px] w-full max-w-[424px] flex-col transition-colors duration-default focus-within:text-grey">
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
            />
            {errors.email && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.email.message}
              </span>
            )}
          </div>

          <UiButton
            className="max-w-[424px] text-[20px] leading-[1.175]"
            variant="filled"
            type="submit"
            disabled={isSubmitting}
          >
            Надіслати повторно
          </UiButton>
        </form>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={resendPasswordImage}
        alt="Auth resend password"
        width="590"
      />

      <ModalApiFeedback
        isOpen={isModalOpen}
        title={title}
        message={modalMessage}
        confirmButtonText={modalConfirmButtonText}
        onConfirmButtonClick={closeModal}
        onOpenChange={(open) => {
          if (!open) closeModal();
        }}
      />
    </div>
  );
};

export { ResendPasswordPage };
