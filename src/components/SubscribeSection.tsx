import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import IconEmail from '../assets/images/icons/icon-email.svg?react';
import { useSubscribeMutation } from '../services/notificationApi';
import { validateEmail } from '../utils/validation';

type SubscribeApiError = {
  data: {
    message: string;
  };
  status: number;
};

type FormData = {
  email: string;
};

const SubscribeSection: FC = () => {
  const [subscribe, result] = useSubscribeMutation();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData): Promise<void> => {
    const validationError = validateEmail(data.email);
    if (validationError) {
      setError('email', { type: 'manual', message: validationError });
      return;
    }

    clearErrors('email');

    try {
      await subscribe({ email: data.email }).unwrap();
      reset();
    } catch (error) {
      const message =
        (error as SubscribeApiError)?.data?.message || 'Помилка підписки';
      setError('email', { type: 'manual', message });
    }
  };

  return (
    <section className="bg-light-black py-10">
      <div className="mx-auto flex max-w-custom-1440 flex-wrap items-center justify-between gap-4 px-[114px]">
        <span className="max-w-[587px] font-family-primary text-[32px] uppercase leading-none text-main">
          Залишайся з нами, щоб першим отримувати пропозиції
        </span>

        <form
          className="flex w-full max-w-[379px] flex-col gap-[14px]"
          onSubmit={handleSubmit(onSubmit)}
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
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p role="alert" className="text-red-500 mt-1 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            className="border border-main px-6 py-5 font-family-secondary text-[20px] leading-none text-main transition-colors duration-default hover:border-orange hover:text-orange disabled:pointer-events-none disabled:opacity-50"
            type="submit"
            disabled={isSubmitting || result.status === 'pending'}
          >
            {isSubmitting || result.status === 'pending'
              ? 'Відправка...'
              : 'Підписатися'}
          </button>
        </form>
      </div>
    </section>
  );
};

export { SubscribeSection };
