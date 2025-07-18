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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="z-[0] flex gap-6">
      <div className="flex h-[684px] w-[212px] flex-col">
        <Swiper
          direction="vertical"
          loop={true}
          slidesPerView={3}
          spaceBetween={12}
          watchOverflow={false}
          className="h-full w-full"
          onSwiper={(swiper) => {
            thumbsSwiperRef.current = swiper;
          }}
        >
          {image.map((src, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {
                mainSwiperRef.current?.slideToLoop(index);
              }}
              className="cursor-pointer"
            >
              <img
                src={src}
                alt={`${name} ${index + 1}`}
                className={`h-[212px] w-[212px] object-cover object-top transition duration-300 ${
                  index === activeIndex ? '' : 'drop-shadow-header opacity-50'
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative h-[684px] w-[566px]">
        <div className="absolute bottom-0 left-4 right-4 top-0 z-[2] my-auto flex justify-between">
          <ButtonPreviousSlide swiperRef={mainSwiperRef} />
          <ButtonNextSlide swiperRef={mainSwiperRef} />
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          className="h-full w-full"
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;

            setActiveIndex(swiper.realIndex);

            swiper.on('slideChange', () => {
              setActiveIndex(swiper.realIndex);
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
