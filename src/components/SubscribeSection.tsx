import { type FC, type FormEvent, useEffect, useRef, useState } from 'react';

import IconEmail from '../assets/images/icons/icon-email.svg?react';
import {
  type SubscribeResponse,
  useSubscribeMutation,
} from '../services/notificationApi';

const SubscribeSection: FC = () => {
  const [error, setError] = useState<string | null>(null);

  const [subscribe, result] = useSubscribeMutation();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (result.isSuccess) {
      formRef.current?.reset();
    }
  }, [result.isSuccess]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = (formData.get('email') || '').toString().trim();

    if (!email) {
      setError('Email є обов’язковим');
      return;
    }

    if (email.length < 14) {
      setError('Email повинен містити щонайменше 14 символів');
      return;
    }

    if (email.length > 72) {
      setError('Email не повинен перевищувати 72 символи');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.(com)$/;

    if (!emailRegex.test(email)) {
      setError('Неправильний формат email. Приклад: name@domain.com');
      return;
    }

    setError(null);
    subscribe({ email });
  };
  console.log('resultttt', result);
  return (
    <section className="bg-light-black py-10">
      <div className="mx-auto flex max-w-custom-1440 flex-wrap items-center justify-between gap-4 px-[114px]">
        <span className="max-w-[587px] font-family-primary text-[32px] uppercase leading-none text-main">
          Залишайся з нами, щоб першим отримувати пропозиції
        </span>

        <form
          ref={formRef}
          className="flex w-full max-w-[379px] flex-col gap-[14px]"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full transition-colors duration-default focus-within:text-grey">
            <IconEmail
              className="absolute left-4 top-1/2 -translate-y-1/2"
              width={20}
            />
            <input
              className="text-l w-full py-5 pl-12 pr-6 font-family-secondary leading-normal text-light-black placeholder:text-grey"
              type="text"
              name="email"
              placeholder="Введіть свою email адресу"
              required
            />
            {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
          </div>

          <button
            className="border border-main px-6 py-5 font-family-secondary text-[20px] leading-none text-main transition-colors duration-default hover:border-orange hover:text-orange"
            type="submit"
            disabled={result.status === 'pending'}
          >
            {result.status === 'pending' ? 'Відправка...' : 'Підписатися'}
          </button>

          {result.isSuccess && (
            <p className="mt-2 text-green-500">
              {(result.data as SubscribeResponse).message}
            </p>
          )}
          {result.isError && 'data' in result.error && (
            <p className="text-red-500 mt-2">{result.error.data as string}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export { SubscribeSection };
