import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';

type LoaderProps = HTMLAttributes<HTMLDivElement> & {
  size?: number;
  color?: string;
  mode?: 'inline' | 'centered' | 'fullscreen';
};

const isValidSize = (value: unknown): value is number =>
  typeof value === 'number' && isFinite(value) && value > 0;

const Loader: FC<LoaderProps> = ({
  size = 20,
  color = 'border-t-grey',
  mode = 'inline',
  className,
  ...rest
}) => {
  const safeSize = isValidSize(size) ? size : 48;
  const sizeRem = safeSize / 16;

  return (
    <div
      className={clsx(
        mode !== 'inline' && 'flex items-center justify-center',
        mode === 'fullscreen' && 'h-screen',
      )}
    >
      <div
        {...rest}
        className={clsx(
          'animate-spin rounded-full border-4 border-solid border-gray-300',
          color,
          className,
        )}
        style={{ width: `${sizeRem}rem`, height: `${sizeRem}rem` }}
        aria-label="loading"
        role="status"
      />
    </div>
  );
};

export { Loader };
