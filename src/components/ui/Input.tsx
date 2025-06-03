interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ ...props }: InputProps) => (
  <input
    className="w-full rounded border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
    {...props}
  />
);

export { Input };
