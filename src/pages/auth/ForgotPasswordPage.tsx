import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import type { InferType } from 'yup';

import forgotPassword from '../../assets/images/auth/forgot-password.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiLink } from '../../components/ui/UiLink';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';
import { forgotPasswordSchema } from '../../schemas/validationSchemas';

type ForgotPasswordFormData = InferType<typeof forgotPasswordSchema>;

const ForgotPasswordPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: ForgotPasswordFormData): void => {
    console.log('Recovery email sent to:', data.email);
    // TODO: логіка відправки листа
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-7/12 flex-shrink-0 flex-col px-7 py-16">
        <UiTitle>Отримати пароль</UiTitle>

        <p className="mt-6 max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
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
              className={`mt-3 w-full border px-6 py-[14px] font-family-secondary leading-normal placeholder:text-grey ${
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
            className="mt-6 max-w-[424px]"
            variant="filled"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Надсилаємо...' : 'Надіслати'}
          </UiButton>
        </form>

        <UiLink
          className="mt-3 max-w-[424px]"
          variant="bordered"
          as={Link}
          to={PATH_PAGES.RESEND_PASSWORD}
        >
          Не отримали лист?
        </UiLink>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={forgotPassword}
        alt="Auth forgot password"
        width="590"
      />
    </div>
  );
};

export { ForgotPasswordPage };
