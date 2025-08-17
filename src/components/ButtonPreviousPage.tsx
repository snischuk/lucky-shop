import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import IconArrowLeft from '../assets/images/icons/icon-arrow-left.svg?react';
import type { UiButtonProps } from './ui/UiButton';
import { UiButton } from './ui/UiButton';

export const ButtonPreviousPage: FC<UiButtonProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(-1);
  };

  return (
    <UiButton
      onClick={handleClick}
      variant="iconOnly"
      icon={<IconArrowLeft width={36} />}
      {...props}
    />
  );
};
