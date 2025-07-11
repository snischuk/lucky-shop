import clsx from 'clsx';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from 'react';
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

interface UiButtonNavLinkProps
  extends Omit<BaseProps, 'className'>,
    NavLinkProps {
  as: typeof NavLink;
  className?: string | ((props: { isActive: boolean }) => string);
}

type UiButtonProps =
  | UiButtonButtonProps
  | UiButtonAnchorProps
  | UiButtonRouterLinkProps
  | UiButtonNavLinkProps;

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
    className,
  );

  if (as === 'a') {
    return (
      <a
        className={baseClass}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  if (as === Link) {
    return (
      <Link className={baseClass} {...(props as LinkProps)}>
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

  return (
    <button
      className={baseClass}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};
