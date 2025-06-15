import type { FC, FormEvent } from 'react';
import { useEffect, useState } from 'react';

import IconEmail from '../assets/images/icons/icon-email.svg?react';
import { Popup } from './ui/Popup';

const SubscribeSectionCopy2: FC = () => {
  const [email, setEmail] = useState('');
  const [popup, setPopup] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string): string | null => {
    if (!email) return 'Email є обовʼязковим';
    if (email.length < 14)
      return 'Email повинен містити щонайменше 14 символів';
    if (email.length > 72) return 'Email повинен містити не більше 72 символів';
    const emailRegex = /^([a-zA-Z0-9+_.-]+)@([a-zA-Z0-9-]+)\.com$/;
    if (!emailRegex.test(email))
      return 'Email повинен мати формат [name]@[domain].com';
    return null;
  };

  const fakeSubscribeRequest = (email: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@exists.com') {
          reject(new Error('Email вже використовується'));
        } else {
          resolve();
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const validationError = validateEmail(email);

    if (validationError) {
      setPopup({ message: validationError, type: 'error' });
      setLoading(false);
      return;
    }

    try {
      await fakeSubscribeRequest(email);
      setPopup({ message: 'Дякуємо за підписку!', type: 'success' });
      setEmail('');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setPopup({ message: err.message || 'Щось пішло не так', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (popup) {
      const timeout = setTimeout(() => setPopup(null), 4000);
      return () => clearTimeout(timeout);
    }
  }, [popup]);

  return (
    <section className="bg-light-black py-10">
      {popup && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup(null)}
        />
      )}

      <div className="mx-auto flex max-w-custom-1440 flex-wrap items-center justify-between gap-4 px-[114px]">
        <span className="max-w-[587px] font-family-primary text-[32px] uppercase leading-none text-main">
          Залишайся з нами, щоб першим отримувати пропозиції
        </span>

        <form
          className="flex w-full max-w-[379px] flex-col gap-[14px]"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full text-light-black transition-colors duration-default focus-within:text-grey">
            <IconEmail
              className="absolute left-4 top-1/2 -translate-y-1/2"
              width={20}
            />
            <input
              className="text-l w-full py-5 pl-12 pr-6 font-family-secondary leading-normal text-light-black placeholder:text-grey"
              type="text"
              name="email"
              placeholder="Введіть свою email адресу"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            className="border border-main px-6 py-5 font-family-secondary text-[20px] leading-none text-main transition-colors duration-default hover:border-orange hover:text-orange disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Зачекайте...' : 'Підписка'}
          </button>
        </form>
      </div>
    </section>
  );
};

export { SubscribeSectionCopy2 };
