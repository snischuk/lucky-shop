import type { FC } from 'react';

interface ButtonProps {
  onClick?: () => void;
}

const GalleryButton: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-light-black p-[14px] font-family-secondary text-body-m uppercase text-main"
    >
      Купити зараз
    </button>
  );
};

export { GalleryButton };
