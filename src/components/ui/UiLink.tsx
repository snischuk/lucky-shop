import clsx from 'clsx';
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import type { LinkProps, NavLinkProps } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

type Variant = 'default' | 'bordered' | 'filled' | 'iconOnly';
type IconPosition = 'before' | 'after';

interface BaseProps {
  className?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  variant?: Variant;
}

interface UiLinkAnchorProps
  extends BaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a';
}

interface UiLinkRouterProps extends BaseProps, LinkProps {
  as: typeof Link;
}

interface UiLinkNavProps extends Omit<BaseProps, 'className'>, NavLinkProps {
  as: typeof NavLink;
  className?: string | ((props: { isActive: boolean }) => string);
}

type UiLinkProps = UiLinkAnchorProps | UiLinkRouterProps | UiLinkNavProps;

const variantClasses = {
  default:
    'text-light-black border-b border-transparent hover:border-black hover:text-black',
  bordered:
    'px-6 py-3 text-light-black border border-black text-black hover:border-orange hover:text-orange',
  filled: 'px-6 py-3 text-light-black bg-black text-white hover:text-orange',
  iconOnly: 'text-grey hover:text-light-black',
};

const UiLink: FC<UiLinkProps> = ({
  children,
  className,
  as,
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
  );

  if (as === 'a') {
    return (
      <a
        className={clsx(baseClass, className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  if (as === Link) {
    return (
      <Link className={clsx(baseClass, className)} {...(props as LinkProps)}>
        {content}
      </Link>
    );
  }

  if (as === NavLink) {
    const navLinkProps = props as NavLinkProps;
    return (
      <NavLink
        {...navLinkProps}
        className={({ isActive }) =>
          clsx(
            baseClass,
            variant === 'iconOnly' &&
              isActive &&
              'pointer-events-none text-red',
            variant !== 'iconOnly' &&
              isActive &&
              'pointer-events-none border-orange text-orange',
            typeof className === 'function'
              ? className({ isActive })
              : className,
          )
        }
      >
        {content}
      </NavLink>
    );
  }

  return null;
};

export { UiLink };
