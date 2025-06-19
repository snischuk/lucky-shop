import 'swiper/css';
import 'swiper/css/pagination';

import { type FC, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GENDERS } from '../../constants/genders';
import { PATH_PAGES } from '../../constants/pathPages';
import type { Gender } from '../../types/Gender';
import { SlideNextButton } from '../ui/SlideNextButton';
import { SlidePrevButton } from '../ui/SlidePrevButton';
import { UiTitle } from '../ui/UiTitle';
import { ViewAllLink } from './ViewAllLink';

interface NewCollectionSectionProps {
  gender: Gender;
}

const NewCollectionSection: FC<NewCollectionSectionProps> = ({ gender }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative z-[0] mx-auto w-full max-w-custom-1440 pb-[70px] pt-[140px]">
      <UiTitle
        as="h2"
        title="Нова колекція"
        className="mb-[80px] text-center"
      />

      <div className="absolute right-0 top-[166px] mb-20 flex justify-end">
        <SlidePrevButton swiperRef={swiperRef} disabled={isBeginning} />
        <SlideNextButton swiperRef={swiperRef} disabled={isEnd} />
      </div>
      <Swiper
        modules={[Pagination, Keyboard, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        keyboard={{ enabled: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);

          swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          });
        }}
        className="mb-[32px] h-[744px]"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <SwiperSlide
            key={n}
            className="flex flex-row items-center justify-center"
          >
            <div className="flex h-[744px] w-[448px] items-center justify-center bg-yellow-400">
              Slide {n}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        {gender === GENDERS.WOMEN && <ViewAllLink link={PATH_PAGES.WOMEN} />}
        {gender === GENDERS.MEN && <ViewAllLink link={PATH_PAGES.MEN} />}
      </div>
    </div>
  );
};

export { NewCollectionSection };
