import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';

interface UiTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const UiTitle: FC<UiTitleProps> = ({
  title,
  as = 'h1',
  className,
  ...props
}) => {
  const Tag = as;

  return (
    <Tag
      className={clsx(
        'font-family-primary text-[32px] uppercase leading-[1.24] text-black',
        className,
      )}
      {...props}
    >
      {title}
    </Tag>
  );
};

export { UiTitle };
