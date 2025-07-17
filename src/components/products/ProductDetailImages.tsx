import 'swiper/css';

import { type FC, useRef, useState } from 'react';
import { type Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ButtonNextSlide } from '../ButtonNextSlide';
import { ButtonPreviousSlide } from '../ButtonPreviousSlide';

interface ProductDetailImagesProps {
  image: string[];
  name: string;
}

const ProductDetailImages: FC<ProductDetailImagesProps> = ({ image, name }) => {
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const thumbsSwiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="z-[0] flex gap-6">
      <div className="flex h-[684px] w-[212px] flex-col">
        <Swiper
          direction="vertical"
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={12}
          watchOverflow={false}
          className="h-full w-full"
          onSwiper={(swiper) => {
            thumbsSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            if (mainSwiperRef.current) {
              mainSwiperRef.current.slideTo(swiper.activeIndex);
            }
          }}
        >
          {image.map((src, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {
                if (mainSwiperRef.current) {
                  mainSwiperRef.current.slideTo(index);
                }
              }}
              className={
                index === activeIndex ? 'border-4 border-blue-500' : ''
              }
            >
              <img
                src={src}
                alt={`${name} ${index + 1}`}
                className="h-[212px] w-[212px] cursor-pointer object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative h-[684px] w-[566px]">
        <div className="absolute bottom-0 left-4 right-4 top-0 z-[2] my-auto flex justify-between">
          <ButtonPreviousSlide
            swiperRef={mainSwiperRef}
            isDisabled={isBeginning}
          />
          <ButtonNextSlide swiperRef={mainSwiperRef} isDisabled={isEnd} />
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          className="h-full w-full"
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            swiper.on('slideChange', () => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              const active = swiper.activeIndex;
              setActiveIndex(active);
              if (thumbsSwiperRef.current) {
                thumbsSwiperRef.current.slideTo(active);
              }
            });
          }}
        >
          {image.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`${name} ${index + 1}`}
                className="h-full w-full object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { ProductDetailImages };
