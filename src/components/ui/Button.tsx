import type { ButtonHTMLAttributes } from 'react';

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
    {...props}
  >
    {children}
  </button>
);

export default Button;
