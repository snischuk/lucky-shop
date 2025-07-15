import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type Variant = 'default' | 'bordered' | 'filled' | 'iconOnly';
type IconPosition = 'before' | 'after';

export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  variant?: Variant;
}

const variantClasses = {
  default:
    'text-light-black border-b border-transparent enabled:hover:border-black enabled:hover:text-black',
  bordered:
    'px-6 py-[14px] text-light-black border border-black text-black enabled:hover:border-orange enabled:hover:text-orange',
  filled:
    'px-6 py-[14px] text-light-black bg-black text-white enabled:hover:text-orange',
  iconOnly: 'text-grey enabled:hover:text-light-black',
};

export const UiButton: FC<UiButtonProps> = ({
  children,
  className,
  icon,
  iconPosition,
  variant = 'default',
  ...props
}) => {
  const content = (
    <>
      {icon && !children && icon}
      {icon && children && iconPosition === 'before' && icon}
      {children}
      {icon && children && iconPosition === 'after' && icon}
    </>
  );

  const baseClass = clsx(
    'inline-flex items-center justify-center gap-1 font-family-secondary transition-colors duration-default disabled:cursor-not-allowed disabled:opacity-50',
    variantClasses[variant],
    className,
  );

  return (
    <button className={baseClass} {...props}>
      {content}
    </button>
  );
};
