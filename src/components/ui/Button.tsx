import type { ButtonHTMLAttributes, FC } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button
    className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
    {...props}
  >
    {children}
  </button>
);

export { Button };
