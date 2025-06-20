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

        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Не отримали лист?
        </p>

        <UiButton
          className="max-w-[330px]"
          variant="contained"
          as={'button'}
          type="submit"
        >
          Надіслати повторно
        </UiButton>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={resendPassword}
        alt="Auth choice"
        width="590"
      />
    </div>
  );
};

export { ResendPasswordPage };
