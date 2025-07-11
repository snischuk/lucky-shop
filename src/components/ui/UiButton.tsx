import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type Variant = 'default' | 'bordered' | 'filled' | 'iconOnly';
type IconPosition = 'before' | 'after';

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  variant?: Variant;
}

const variantClasses = {
  default:
    'text-light-black border-b border-transparent hover:border-black hover:text-black',
  bordered:
    'px-6 py-3 text-light-black border border-black text-black hover:border-orange hover:text-orange',
  filled: 'px-6 py-3 text-light-black bg-black text-white hover:text-orange',
  iconOnly: 'text-grey hover:text-light-black',
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
    'inline-flex items-center justify-center gap-1 font-family-secondary transition-colors duration-default',
    variantClasses[variant],
    className,
  );

  return (
    <button className={baseClass} {...props}>
      {content}
    </button>
  );
};
