import type { Swiper as SwiperType } from 'swiper';
export interface ButtonSlideProps {
  swiperRef: React.RefObject<SwiperType | null>;
  isDisabled?: boolean;
}
