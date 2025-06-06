import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/keyboard';
import 'swiper/css/autoplay';

import type { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { HeroSlide } from '../../types/hero';

interface HeroSectionProps {
  slides: HeroSlide[];
}

const HeroSection: FC<HeroSectionProps> = ({ slides }) => (
  <div className="mx-auto grid max-w-custom-1440 items-end justify-items-end">
    <Swiper
      className="hero-swiper relative col-start-1 col-end-2 row-start-1 row-end-2 h-[600px] w-full"
      modules={[Pagination, Keyboard, A11y, Autoplay, EffectFade]}
      effect={'fade'}
      autoplay={{ delay: 6000 }}
      speed={600}
      slidesPerView={1}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
    >
      {slides.map(({ url, alt, textBig, textSmall }, index) => (
        <SwiperSlide key={url}>
          <div className={`grid ${index === 2 ? 'items-start' : 'items-end'}`}>
            <img
              className="col-start-1 col-end-2 row-start-1 row-end-2 h-[600px] w-full object-cover"
              src={url}
              alt={alt}
              height={600}
            />

            <div className="col-start-1 col-end-2 row-start-1 row-end-2 px-6 py-20">
              <span className="block text-nowrap font-family-primary text-4xl text-black">
                {textSmall}
              </span>
              <span className="block font-family-primary text-8xl uppercase text-black">
                {textBig}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col gap-4 px-28 py-20">
      <Link
        to="/man"
        className="w-[330px] border border-solid border-light-black bg-transparent px-6 py-5 text-center font-family-secondary font-medium uppercase leading-none text-light-black transition-colors duration-300 hover:border-orange hover:text-orange"
      >
        Жіноча колекція
      </Link>
      <Link
        to="/woman"
        className="w-[330px] border border-solid border-light-black bg-transparent px-6 py-5 text-center font-family-secondary font-medium uppercase leading-none text-light-black transition-colors duration-300 hover:border-orange hover:text-orange"
      >
        Чоловіча колекція
      </Link>
    </div>
  </div>
);

export { HeroSection };
