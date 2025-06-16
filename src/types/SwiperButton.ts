import type { Swiper as SwiperType } from 'swiper';

export interface SlideButtonProps {
  swiperRef: React.RefObject<SwiperType | null>;
  disabled?: boolean;
}
