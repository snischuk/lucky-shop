import clsx from 'clsx';
import type { FC, LabelHTMLAttributes, ReactNode } from 'react';

interface UiLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}

const UiLabel: FC<UiLabelProps> = ({ children, className, ...props }) => (
  <label
    className={clsx(
      'font-family-secondary text-[18px] leading-[1.17] text-light-black',
      className,
    )}
    {...props}
  >
    {children}
  </label>
);

export { UiLabel };
