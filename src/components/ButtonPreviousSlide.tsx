import type { FC } from 'react';

import IconArrowLeft from '../assets/images/icons/icon-arrow-left.svg?react';
import type { ButtonSlideProps } from '../types/SwiperButton';
import { UiButton } from './ui/UiButton';

const ButtonPreviousSlide: FC<ButtonSlideProps> = ({
  swiperRef,
  isDisabled,
}) => {
  const handleClick = () => {
    if (!isDisabled && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <UiButton
      variant="iconOnly"
      icon={<IconArrowLeft width={39} height={16} />}
      onClick={handleClick}
      disabled={isDisabled}
    />
  );
};

export { ButtonPreviousSlide };
