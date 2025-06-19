import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC } from 'react';

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
}

export const UiButton: FC<UiButtonProps> = ({
  className,
  children,
  variant = 'contained',
  ...props
}) => {
  const baseClasses =
    'w-full px-6 py-5 font-family-secondary text-[20px] leading-[1.175] transition-colors duration-default';

  const variants = {
    contained: 'bg-light-black text-white hover:text-orange',
    outlined:
      'bg-transparent text-black border border-solid border-light-black hover:text-orange hover:border-orange',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
