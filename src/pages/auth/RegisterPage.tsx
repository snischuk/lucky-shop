import type { FC } from 'react';

import register from '../../assets/images/auth/register.jpg';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';
const RegisterPage: FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <UiTitle>Зареєструйтеся</UiTitle>

        <UiButton
          className="max-w-[330px]"
          variant="contained"
          as={'button'}
          type="submit"
        >
          Зареєструватися
        </UiButton>

        <UiButton
          className="max-w-[330px]"
          variant="outlined"
          as={'button'}
          type="submit"
        >
          Зареєструватися через Google
        </UiButton>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={register}
        alt="Auth register"
        width="590"
      />
    </div>
  );
};

export { RegisterPage };
