import type { FC } from 'react';

import IconEmail from '../assets/images/icons/icon-email.svg?react';

const SubscribeSectionCopy: FC = () => (
  <section className="bg-light-black py-10">
    <div className="mx-auto flex max-w-custom-1440 flex-wrap items-center justify-between gap-4 px-[114px]">
      <span className="max-w-[587px] font-family-primary text-[32px] uppercase leading-none text-main">
        Залишайся з нами, щоб першим отримувати пропозиції
      </span>

      <form
        className="flex w-full max-w-[379px] flex-col gap-[14px]"
        action="#"
      >
        <div className="relative w-full text-light-black transition-colors duration-default focus-within:text-grey">
          <IconEmail
            className="absolute left-4 top-1/2 -translate-y-1/2"
            width={20}
          />
          <input
            className="text-l w-full py-5 pl-12 pr-6 font-family-secondary leading-normal text-light-black placeholder:text-grey"
            type="email"
            name="email"
            id=""
            placeholder="Введіть свою email адресу"
          />
        </div>
        <button
          className="border border-main px-6 py-5 font-family-secondary text-[20px] leading-none text-main transition-colors duration-default hover:border-orange hover:text-orange"
          type="submit"
        >
          Підписатися
        </button>
      </form>
    </div>
  </section>
);

export { SubscribeSectionCopy };
