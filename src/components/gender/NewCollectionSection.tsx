import 'swiper/css';
import 'swiper/css/pagination';

import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideNextButton } from '../ui/SlideNextButton';
import { SlidePrevButton } from '../ui/SlidePrevButton';
import { SubtitleSection } from '../ui/SubtitleSection';

const NewCollectionSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative z-[0] mx-auto w-full max-w-custom-1440 pt-[140px]">
      <SubtitleSection title="Нова колекція" />
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
        className="h-[744px]"
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
    </div>
  );
};

export { NewCollectionSection };
