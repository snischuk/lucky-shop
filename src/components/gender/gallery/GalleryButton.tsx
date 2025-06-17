import type { ButtonHTMLAttributes, FC } from 'react';

const GalleryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <button
      {...props}
      className="bg-light-black px-[14px] py-[11px] font-family-secondary text-body-m font-medium uppercase text-main transition duration-300 hover:text-orange"
    >
      Купити зараз
    </button>
  );
};

export { GalleryButton };
