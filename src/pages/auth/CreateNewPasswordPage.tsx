import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { InferType } from 'yup';

import createNewPassword from '../../assets/images/auth/create-new-password.jpg';
import IconEyeClosed from '../../assets/images/icons/icon-eye-closed.svg?react';
import IconEyeOpened from '../../assets/images/icons/icon-eye-opened.svg?react';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { newPasswordSchema } from '../../schemas/validationSchemas';

type NewPasswordFormData = InferType<typeof newPasswordSchema>;

const CreateNewPasswordPage: FC = () => {
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

  const handleToggleNewPassword = (): void => {
    setIsShowNewPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = (): void => {
    setIsShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = (data: NewPasswordFormData): void => {
    console.log('New password data:', data);
    // TODO: логіка оновлення пароля
  };

  return (
    <div className="flex w-full justify-between">
      <div className="align-center flex w-7/12 flex-shrink-0 flex-col items-center gap-7 px-7 py-16">
        <UiTitle>Створити новий пароль</UiTitle>

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
                className={`w-full border py-[14px] pl-6 pr-[72px] font-family-secondary leading-normal placeholder:text-grey ${
                  errors.newPassword
                    ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                    : 'border-medium-grey text-light-black'
                }`}
                aria-invalid={!!errors.newPassword}
              />
              <button
                type="button"
                onClick={handleToggleNewPassword}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-medium-grey transition-colors duration-default hover:text-grey"
              >
                {isShowNewPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </button>
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
                className={`w-full border py-[14px] pl-6 pr-[72px] font-family-secondary leading-normal placeholder:text-grey ${
                  errors.confirmPassword
                    ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                    : 'border-medium-grey text-light-black'
                }`}
                aria-invalid={!!errors.confirmPassword}
              />
              <button
                type="button"
                onClick={handleToggleConfirmPassword}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-medium-grey transition-colors duration-default hover:text-grey"
              >
                {isShowConfirmPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <UiButton
            className="mt-6 w-full"
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
    </div>
  );
};

export { CreateNewPasswordPage };
