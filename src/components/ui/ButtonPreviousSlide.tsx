import type { FC } from 'react';

import IconArrowLeft from '../../assets/images/icons/icon-arrow-left.svg?react';
import type { ButtonSlideProps } from '../../types/SwiperButton';
import { UiButton } from './UiButton';

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
    // <button
    //   onClick={handleClick}
    //   disabled={isDisabled}
    //   className={`px-2 py-2 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    // >
    //   <IconArrowLeft className="h-3.5 w-9" />
    // </button>
    <UiButton
      variant="iconOnly"
      icon={<IconArrowLeft width={39} height={16} />}
      onClick={handleClick}
      disabled={isDisabled}
    />
  );
};

export { ButtonPreviousSlide };
