import type { FC } from 'react';

import IconArrow from '../../assets/images/icons/icon-arrow-left.svg?react';
import type { SlideButtonProps } from '../../types/SwiperButton';

const SlidePrevButton: FC<SlideButtonProps> = ({ swiperRef, disabled }) => {
  const handleClick = () => {
    if (!disabled && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`rounded px-2 py-2 ${disabled ? 'opacity-50' : ''}`}
    >
      <IconArrow className="h-3.5 w-9" />
    </button>
  );
};

export { SlidePrevButton };
