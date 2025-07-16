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
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="flex gap-6">
      <div className="flex w-[212px] flex-col gap-6">
        {image.slice(1, 4).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${name} ${index + 2}`}
            className="h-[212px] w-[212px] object-cover object-top"
          />
        ))}
      </div>
      <div className="relative z-[0] h-[684px] w-[566px] overflow-hidden">
        <div className="absolute bottom-0 left-4 right-4 top-0 z-[1] my-auto flex justify-between">
          <ButtonPreviousSlide swiperRef={swiperRef} isDisabled={isBeginning} />
          <ButtonNextSlide swiperRef={swiperRef} isDisabled={isEnd} />
        </div>
        <Swiper
          direction="horizontal"
          modules={[Navigation]}
          slidesPerView={1}
          className="h-full w-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            swiper.on('slideChange', () => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
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
