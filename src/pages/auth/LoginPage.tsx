import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { InferType } from 'yup';

import loginImage from '../../assets/images/auth/login.jpg';
import IconEyeClosed from '../../assets/images/icons/icon-eye-closed.svg?react';
import IconEyeOpened from '../../assets/images/icons/icon-eye-opened.svg?react';
import IconGoogle from '../../assets/images/icons/icon-google.svg?react';
import { ButtonPreviousPage } from '../../components/ButtonPreviousPage';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
import { PATH_PAGES } from '../../constants/pathPages';
import { useHandleApiError } from '../../hooks/useHandleApiError';
import { useTypedDispatch } from '../../hooks/useRedux';
import { setCredentials } from '../../redux/authSlice';
import { loginSchema } from '../../schemas/validationSchemas';
import { useLoginMutation } from '../../services/authApi';

type LoginFormData = InferType<typeof loginSchema>;

const LoginPage: FC = () => {
  const [login] = useLoginMutation();
  const handleApiError = useHandleApiError();
  const dispatch = useTypedDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const handlePasswordVisibility = (): void => {
    setIsShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: LoginFormData): Promise<void> => {
    try {
      const { token, role } = await login(data).unwrap();
      dispatch(setCredentials({ token, role }));
      navigate(location.state?.from?.pathname || PATH_PAGES.MAIN);
    } catch (error: unknown) {
      handleApiError(error);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="align-center flex w-7/12 flex-shrink-0 flex-col items-center gap-7 px-7 py-6">
        <ButtonPreviousPage className="self-start" />

        <UiTitle as="h1">Вхід</UiTitle>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-[424px] flex-col items-center"
        >
          <div className="flex h-[90px] w-full flex-col">
            <label
              htmlFor="email"
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
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

          <div className="mt-[34px] flex h-[110px] w-full flex-col">
            <label
              htmlFor="password"
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
            >
              Пароль
            </label>
            <div className="relative mt-3">
              <input
                id="password"
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Уведіть свій пароль"
                {...register('password')}
                className={`w-full border py-[14px] pl-6 pr-[72px] font-family-secondary text-[18px] leading-[1.17] placeholder:text-grey ${
                  errors.password
                    ? 'border-dark-red text-dark-red placeholder:text-dark-red'
                    : 'border-medium-grey text-light-black'
                }`}
                aria-invalid={!!errors.password}
              />

              <UiButton
                type="button"
                onClick={handlePasswordVisibility}
                className="absolute right-6 top-1/2 -translate-y-1/2"
                variant="iconOnly"
                icon={isShowPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              />
            </div>
            <div className="mt-[2px] flex flex-wrap gap-1 font-family-secondary text-[14px] leading-[1.17]">
              {errors.password && (
                <span className="flex-shrink-0 text-dark-red">
                  {errors.password.message}
                </span>
              )}
              <Link
                to={PATH_PAGES.FORGOT_PASSWORD}
                className={
                  errors.password
                    ? 'font-semibold text-dark-red'
                    : 'text-light-black'
                }
              >
                Забули пароль?
              </Link>
            </div>
          </div>

          <UiButton
            className="mt-9 w-full text-[20px] leading-[1.175]"
            variant="filled"
            type="submit"
            disabled={isSubmitting}
          >
            Увійти
          </UiButton>

          <UiButton
            // TODO: реалізувати авторизацію через Google OAuth
            className="mt-3 w-full gap-5 text-[20px] leading-[1.175]"
            variant="bordered"
            type="button"
            icon={<IconGoogle />}
            iconPosition="before"
            disabled={true}
          >
            Увійти через Google
          </UiButton>
        </form>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={loginImage}
        alt="Auth login"
        width="590"
      />
    </div>
  );
};

export { LoginPage };
