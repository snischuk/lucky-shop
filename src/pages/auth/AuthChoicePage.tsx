import type { FC } from 'react';

import Choice from '../../assets/images/auth/choice.jpg';
import { UiButton } from '../../components/ui/UiButton';

const AuthChoicePage: FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-7/12 flex-shrink-0 flex-col gap-6 px-7 py-16">
        <h1 className="font-family-primary text-[32px] uppercase leading-[1.24] text-black">
          Насолоджуйтесь найкращим шопінгом разом з Lucky
        </h1>
        <p className="max-w-[609px] font-family-secondary text-[24px] uppercase leading-[1.175] text-black">
          Увійдіть або зареєструйтесь, щоб насолодитися персоналізованим
          шопінгом і доступом до всіх наших послуг
        </p>
        <button className="w-full max-w-[330px] bg-light-black px-6 py-5 font-family-secondary text-[20px] leading-[1.175] text-white transition-colors duration-default hover:text-orange">
          Увійти
        </button>
        <button className="w-full max-w-[330px] border border-solid border-light-black bg-transparent px-6 py-5 font-family-secondary text-[20px] leading-[1.175] text-black transition-colors duration-default hover:border-orange hover:text-orange">
          Зареєструватися
        </button>
        <UiButton>Підписатися</UiButton>

        {/* <button
          className="flex items-center justify-center gap-2 border border-main px-6 py-5 font-family-secondary text-[20px] leading-none text-main transition-colors duration-default hover:border-orange hover:text-orange disabled:pointer-events-none disabled:opacity-50"
          type="submit"
        >
          Підписатися
        </button> */}

        <label htmlFor="agreement">
          <input type="checkbox" name="checkbox" id="agreement" />
          Погоджуюсь з умовами використання
        </label>
      </div>

      <img
        className="w-5/12 max-w-[590px] flex-shrink"
        src={Choice}
        alt="Auth choice"
        width="590"
      />
    </div>
  );
};

export { AuthChoicePage };
