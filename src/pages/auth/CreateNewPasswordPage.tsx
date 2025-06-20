import type { FC } from 'react';

import createNewPassword from '../../assets/images/auth/create-new-password.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';

const CreateNewPasswordPage: FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle>Створити новий пароль</UiTitle>

        <UiButton
          className="max-w-[330px]"
          variant="contained"
          as={'button'}
          type="submit"
        >
          Зберегти новий пароль
        </UiButton>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={createNewPassword}
        alt="Auth choice"
        width="590"
      />
    </div>
  );
};

export { CreateNewPasswordPage };
