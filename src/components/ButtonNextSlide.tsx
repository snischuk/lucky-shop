import type { FC } from 'react';

import IconArrowRight from '../assets/images/icons/icon-arrow-right.svg?react';
import type { ButtonSlideProps } from '../types/SwiperButton';
import { UiButton } from './ui/UiButton';

const ButtonNextSlide: FC<ButtonSlideProps> = ({ swiperRef, isDisabled }) => {
  const handleClick = () => {
    if (!isDisabled && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <UiButton
      variant="iconOnly"
      icon={<IconArrowRight width={39} height={16} />}
      onClick={handleClick}
      disabled={isDisabled}
    />
  );
};

export { ButtonNextSlide };
