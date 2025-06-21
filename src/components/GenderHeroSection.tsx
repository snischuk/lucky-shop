import type { FC } from 'react';

import man from '../assets/images/man/hero.jpg';
import man2x from '../assets/images/man/hero@2x.jpg';
import woman from '../assets/images/woman/hero.jpg';
import woman2x from '../assets/images/woman/hero@2x.jpg';
import type { Gender } from '../types/Gender';

interface GenderHeroSectionProps {
  gender: Gender;
}
const GenderHeroSection: FC<GenderHeroSectionProps> = ({ gender }) => {
  return (
    <section className="relative mx-auto flex max-w-custom-1440">
      {gender === 'woman' ? (
        <img src={woman} srcSet={`${woman2x} 2x`} alt="woman"></img>
      ) : (
        <img src={man} srcSet={`${man2x} 2x`} alt="man"></img>
      )}
      <a
        href="#"
        className="fs-preload absolute bottom-[100px] left-1/2 flex w-[212px] -translate-x-1/2 justify-center bg-light-black px-6 py-3 font-family-secondary text-[20px] text-main"
      >
        Перейти
      </a>
    </section>
  );
};

export { GenderHeroSection };
