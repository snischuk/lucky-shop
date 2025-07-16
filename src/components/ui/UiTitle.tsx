import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';

interface UiTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const UiTitle: FC<UiTitleProps> = ({
  children,
  className,
  as = 'h1',
  ...props
}) => {
  const Tag = as;

  return (
    <Tag
      className={clsx(
        'font-family-primary text-[32px] uppercase leading-[1.25] text-black',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export { UiTitle };
