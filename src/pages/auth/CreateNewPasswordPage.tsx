import { type FC, useState } from 'react';

import createNewPassword from '../../assets/images/auth/create-new-password.jpg';
import IconEyeClosed from '../../assets/images/icons/icon-eye-closed.svg?react';
import IconEyeOpened from '../../assets/images/icons/icon-eye-opened.svg?react';
import { UiButton } from '../../components/ui/UiButton';
import { UiTitle } from '../../components/ui/UiTitle';

const CreateNewPasswordPage: FC = () => {
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const handleToggleNewPassword = (): void => {
    setIsShowNewPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = (): void => {
    setIsShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="flex w-full">
      <div className="align-center flex w-7/12 flex-shrink-0 flex-col items-center gap-6 px-7 py-16">
        <UiTitle>Створити новий пароль</UiTitle>

        <form
          className="flex w-full max-w-[424px] flex-col items-center"
          action=""
          method="post"
        >
          <div className="flex w-full flex-col transition-colors duration-default focus-within:text-grey">
            <label
              htmlFor="newPassword"
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
            >
              Новий пароль
            </label>
            <div className="relative mt-3">
              <input
                id="newPassword"
                type={isShowNewPassword ? 'text' : 'password'}
                placeholder="Уведіть свій пароль"
                className="w-full border border-medium-grey py-[14px] pl-6 pr-[72px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
              />
              <button
                type="button"
                onClick={handleToggleNewPassword}
                className="absolute right-6 top-1/2 -translate-y-1/2"
              >
                {isShowNewPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </button>
            </div>
            <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
              Не вірний пароль.
            </span>
          </div>

          <div className="mt-[10px] flex w-full flex-col transition-colors duration-default focus-within:text-grey">
            <label
              htmlFor="confirmPassword"
              className="font-family-secondary text-[18px] leading-[1.17] text-light-black"
            >
              Підтвердити пароль
            </label>
            <div className="relative mt-3">
              <input
                id="confirmPassword"
                type={isShowConfirmPassword ? 'text' : 'password'}
                placeholder="Підтвердіть новий пароль"
                className="w-full border border-medium-grey py-[14px] pl-6 pr-[72px] font-family-secondary leading-normal text-light-black placeholder:text-grey"
              />
              <button
                type="button"
                onClick={handleToggleConfirmPassword}
                className="absolute right-6 top-1/2 -translate-y-1/2"
              >
                {isShowConfirmPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </button>
            </div>
            <span className="mt-[2px] font-family-secondary text-[14px] leading-[1.17] text-dark-red">
              Не вірний пароль.
            </span>
          </div>

          <UiButton
            className="mt-6"
            variant="contained"
            as="button"
            type="submit"
          >
            Зберегти новий пароль
          </UiButton>
        </form>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={createNewPassword}
        alt="Auth create new password"
        width="590"
      />
    </div>
  );
};

export { CreateNewPasswordPage };
