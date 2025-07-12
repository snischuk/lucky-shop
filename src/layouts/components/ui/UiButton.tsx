import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface BaseProps {
  className?: string;
  variant?: 'contained' | 'outlined';
}

interface UiButtonButtonProps
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  as: 'button';
}

interface UiButtonAnchorProps
  extends BaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a';
}

interface UiButtonRouterLinkProps extends BaseProps, LinkProps {
  as: typeof Link;
}

type UiButtonProps =
  | UiButtonButtonProps
  | UiButtonAnchorProps
  | UiButtonRouterLinkProps;

const variants = {
  contained: 'bg-light-black text-white hover:text-orange',
  outlined:
    'bg-transparent text-black border border-light-black hover:text-orange hover:border-orange',
};

export const UiButton: FC<UiButtonProps> = ({
  children,
  className,
  as,
  variant = 'contained',
  ...props
}) => {
  const baseClasses =
    'w-full px-6 py-[14px] flex items-center justify-center font-family-secondary text-[20px] leading-[1.27] transition-colors duration-default';

  const variantClasses = variants[variant] || '';

  const classes = clsx(baseClasses, variantClasses, className);

  if (as === 'a') {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  if (as === Link) {
    const linkProps = props as LinkProps;
    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};
