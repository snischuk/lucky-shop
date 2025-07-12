import { type FC, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconStars from '../../assets/images/icons/icon-stars.svg?react';
import IconVerified from '../../assets/images/icons/icon-verified.svg?react';
import { reviewsData } from '../../data/reviewsData';
import { ButtonNextSlide } from '../ui/ButtonNextSlide';
import { ButtonPreviousSlide } from '../ui/ButtonPreviousSlide';
import { UiTitle } from '../ui/UiTitle';

const ReviewsSection: FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="relative z-[0] mx-auto max-w-custom-1440 pb-[125px] pt-[70px]">
      <UiTitle className="mb-[80px] text-center" as="h2">
        Наші клієнти говорять
      </UiTitle>
      <div className="absolute right-0 top-[96px] flex justify-end gap-5">
        <ButtonPreviousSlide swiperRef={swiperRef} isDisabled={isBeginning} />
        <ButtonNextSlide swiperRef={swiperRef} isDisabled={isEnd} />
      </div>
      <div className="relative w-full px-[20px]">
        <Swiper
          modules={[Pagination, Keyboard, A11y, Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);

            swiper.on('slideChange', () => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            });
          }}
          className="reviews-swiper px-[20px]"
        >
          {reviewsData.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex h-[255px] w-full flex-col rounded-md border border-[#0000001A] px-[32px] py-[28px]">
                <p className="mb-[15px] text-yellow-600">
                  <IconStars />
                </p>
                <p className="mb-[12px] flex gap-2 font-family-secondary text-preload text-light-black">
                  {review.clientName} <IconVerified />
                </p>
                <p className="font-family-secondary text-body-s text-grey">
                  "{review.description}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { ReviewsSection };
