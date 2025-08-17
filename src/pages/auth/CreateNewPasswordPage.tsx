import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { InferType } from 'yup';

import createNewPassword from '../../assets/images/auth/create-new-password.jpg';
import IconEyeClosed from '../../assets/images/icons/icon-eye-closed.svg?react';
import IconEyeOpened from '../../assets/images/icons/icon-eye-opened.svg?react';
import { ModalApiFeedback } from '../../components/ModalApiFeedback';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';
import { useHandleApiError } from '../../hooks/useHandleApiError';
import { useModal } from '../../hooks/useModal';
import { newPasswordSchema } from '../../schemas/validationSchemas';
import { useResetPasswordMutation } from '../../services/authApi';

type NewPasswordFormData = InferType<typeof newPasswordSchema>;

const CreateNewPasswordPage: FC = () => {
  const [searchParams] = useSearchParams();
  const [resetPassword] = useResetPasswordMutation();
  const handleApiError = useHandleApiError();

  const {
    isModalOpen,
    title,
    modalMessage,
    modalConfirmButtonText,
    modalRedirectPath,
    openModal,
    closeAndRedirectModal,
  } = useModal();

  const navigate = useNavigate();
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(newPasswordSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const handleNewPasswordVisibility = (): void => {
    setIsShowNewPassword((prev) => !prev);
  };

  const handleConfirmPasswordVisibility = (): void => {
    setIsShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = async (formData: NewPasswordFormData): Promise<void> => {
    const token = searchParams.get('token');

    if (!token) {
      navigate(PATH_PAGES.BAD_REQUEST);
      return;
    }

    const cleanDataToSend = { ...formData, token };
    delete cleanDataToSend.confirmPassword;

    try {
      await resetPassword(cleanDataToSend).unwrap();
      openModal({
        title: 'Новий пароль збережено',
        message: 'Новий пароль збережено',
        buttonText: 'Вхід',
        redirectPath: PATH_PAGES.LOGIN,
      });
    } catch (error: unknown) {
      handleApiError(error);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="align-center flex w-7/12 flex-shrink-0 flex-col items-center gap-7 px-7 py-16">
        <UiTitle as="h1">Створити новий пароль</UiTitle>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-[424px] flex-col items-center"
        >
          <div className="flex h-[110px] w-full flex-col">
            <label
              htmlFor="newPassword"
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
            >
              Новий пароль
            </label>
            <div className="relative mt-3">
              <input
                id="newPassword"
                type={isShowNewPassword ? 'text' : 'password'}
                placeholder="Уведіть свій пароль"
                {...register('newPassword')}
                className={`w-full border py-[14px] pl-6 pr-[72px] font-family-secondary text-[18px] leading-[1.17] placeholder:text-grey ${
                  errors.newPassword
                    ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                    : 'border-medium-grey text-light-black'
                }`}
                aria-invalid={!!errors.newPassword}
              />
              <UiButton
                type="button"
                onClick={handleNewPasswordVisibility}
                className="absolute right-6 top-1/2 -translate-y-1/2"
                variant="iconOnly"
                icon={isShowNewPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              />
            </div>
            {errors.newPassword && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.newPassword.message}
              </span>
            )}
          </div>

          <div className="mt-[10px] flex h-[110px] w-full flex-col">
            <label
              htmlFor="confirmPassword"
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
            >
              Підтвердити пароль
            </label>
            <div className="relative mt-3">
              <input
                id="confirmPassword"
                type={isShowConfirmPassword ? 'text' : 'password'}
                placeholder="Підтвердіть новий пароль"
                {...register('confirmPassword')}
                className={`w-full border py-[14px] pl-6 pr-[72px] font-family-secondary text-[18px] leading-[1.17] placeholder:text-grey ${
                  errors.confirmPassword
                    ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                    : 'border-medium-grey text-light-black'
                }`}
                aria-invalid={!!errors.confirmPassword}
              />
              <UiButton
                type="button"
                onClick={handleConfirmPasswordVisibility}
                className="absolute right-6 top-1/2 -translate-y-1/2"
                variant="iconOnly"
                icon={
                  isShowConfirmPassword ? <IconEyeOpened /> : <IconEyeClosed />
                }
              />
            </div>
            {errors.confirmPassword && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <UiButton
            className="mt-6 w-full text-[20px] leading-[1.175]"
            variant="filled"
            type="submit"
            disabled={isSubmitting}
          >
            Зберегти новий пароль
          </UiButton>
        </form>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={createNewPassword}
        alt="Auth create new password"
        width="590"
      />

      <ModalApiFeedback
        isOpen={isModalOpen}
        title={title}
        message={modalMessage}
        confirmButtonText={modalConfirmButtonText}
        onConfirmButtonClick={closeAndRedirectModal}
        redirectPath={modalRedirectPath}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            closeAndRedirectModal();
          }
        }}
      />
    </div>
  );
};

export { CreateNewPasswordPage };
