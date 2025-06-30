import type { FC } from 'react';

import man from '../../assets/images/home/find-yours/men.jpg';
import man2x from '../../assets/images/home/find-yours/men@2x.jpg';
import woman from '../../assets/images/home/find-yours/women.jpg';
import woman2x from '../../assets/images/home/find-yours/women@2x.jpg';
import { UiTitle } from '../ui/UiTitle';

const FindYoursSection: FC = () => {
  return (
    <section className="mx-auto max-w-custom-1440 pb-[70px] pt-[140px]">
      <UiTitle className="mb-[80px] text-center" as="h2">
        Знайди своє
      </UiTitle>
      <div className="grid grid-cols-2">
        <div>
          <img src={woman} srcSet={`${woman2x} 2x`} alt="women"></img>
        </div>
        <div className="flex flex-col justify-between px-6 pb-[60px] pt-20 font-family-secondary">
          <h3 className="text-[64px] font-semibold uppercase">Жіноче</h3>
          <ul className="flex flex-col gap-4 text-[24px] uppercase leading-[normal] text-light-black">
            <li>
              <a
                href="woman#new"
                className="transition-all duration-default hover:border-b hover:border-light-black"
              >
                Нова колекція
              </a>
            </li>
            <li>
              <a
                href="woman#top"
                className="transition-all duration-default hover:border-b hover:border-light-black"
              >
                Топ продажів
              </a>
            </li>
            <li>
              <a
                href="woman#sale"
                className="text-orange transition-all duration-default hover:border-b hover:border-orange"
              >
                Розпродаж
              </a>
            </li>
          </ul>
          <div className="flex justify-end text-light-black">
            <a
              href="woman"
              className="border border-light-black px-9 py-3 text-[24px] font-medium uppercase leading-[normal] transition-all duration-default hover:border-orange hover:text-orange"
            >
              Перейти до каталогу
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between px-6 pb-[60px] pt-20 font-family-secondary">
          <h3 className="text-[64px] font-semibold uppercase">Чоловіче</h3>
          <ul className="flex flex-col gap-4 text-[24px] uppercase leading-[normal] text-light-black">
            <li>
              <a
                href="man#new"
                className="transition-all duration-default hover:border-b hover:border-light-black"
              >
                Нова колекція
              </a>
            </li>
            <li>
              <a
                href="man#top"
                className="transition-all duration-default hover:border-b hover:border-light-black"
              >
                Топ продажів
              </a>
            </li>
            <li>
              <a
                href="man#sale"
                className="text-orange transition-all duration-default hover:border-b hover:border-orange"
              >
                Розпродаж
              </a>
            </li>
          </ul>
          <div className="flex justify-end text-light-black">
            <a
              href="man"
              className="border border-light-black px-9 py-3 text-[24px] text-h4 font-medium uppercase leading-[normal] transition-all duration-default hover:border-orange hover:text-orange"
            >
              Перейти до каталогу
            </a>
          </div>
        </div>
        <div>
          <img src={man} srcSet={`${man2x} 2x`} alt="men"></img>
        </div>
      </div>
    </section>
  );
};

export { FindYoursSection };
