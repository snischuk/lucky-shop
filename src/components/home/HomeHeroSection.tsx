import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/keyboard';
import 'swiper/css/autoplay';

import type { FC } from 'react';
import { href, Link } from 'react-router-dom';
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GENDERS } from '../../constants/genders';
import { PATH_PAGES } from '../../constants/pathPages';
import type { HomeHeroSlide } from '../../types/HomeHeroSlide';
import { UiLink } from '../ui/UiLink';

interface HeroSectionProps {
  slides: HomeHeroSlide[];
}

const HomeHeroSection: FC<HeroSectionProps> = ({ slides }) => (
  <div className="z-[0] mx-auto grid max-w-custom-1440 items-end justify-items-end">
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
      <UiLink
        as={Link}
        variant="bordered"
        to={href(PATH_PAGES.GENDER_PARAM, { gender: GENDERS.WOMAN })}
        className="w-[330px] px-6 py-5 font-medium uppercase leading-none"
      >
        Жіноча колекція
      </UiLink>
      <UiLink
        as={Link}
        variant="bordered"
        to={href(PATH_PAGES.GENDER_PARAM, { gender: GENDERS.MAN })}
        className="w-[330px] px-6 py-5 font-medium uppercase leading-none"
      >
        Чоловіча колекція
      </UiLink>
    </div>
  </div>
);

export { HomeHeroSection };
