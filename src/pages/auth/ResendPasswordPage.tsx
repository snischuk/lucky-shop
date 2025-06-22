import type { FC } from 'react';

import resendPassword from '../../assets/images/auth/password-resending.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';

const ResendPasswordPage: FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle>Повторне надсилання пароля</UiTitle>

        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Ми надіслали вам електронного листа з посиланням для скидання пароля.
          Його отримання може зайняти кілька хвилин. Не забудьте перевірити
          папку “Спам”
        </p>

        <p className="font-family-secondary text-[20px] font-semibold uppercase leading-[1.15] text-black">
          Не отримали лист?
        </p>

        <form className="flex flex-col gap-6">
          <div className="flex w-full max-w-[424px] flex-col transition-colors duration-default focus-within:text-grey">
            <label
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
              htmlFor="email"
            >
              Адреса Ел. пошти
            </label>
            <input
              id="email"
              // {...register('email')}
              className="mt-3 w-full border border-medium-grey px-6 py-[14px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
              type="text"
              placeholder="Адреса Ел. пошти"
              // aria-invalid={!!errors.email}
            />
            {/* <span className="text-dark-red mt-[2px] font-family-secondary text-[14px] leading-[1.17]">
            Введіть дійсну електронну адресу
          </span> */}
          </div>

          <UiButton
            className="max-w-[424px]"
            variant="contained"
            as="button"
            type="submit"
          >
            Надіслати повторно
          </UiButton>
        </form>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={resendPassword}
        alt="Auth resend password"
        width="590"
      />
    </div>
  );
};

export { ResendPasswordPage };
