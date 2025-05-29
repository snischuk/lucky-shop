interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ ...props }: InputProps) => (
  <input
    className="border px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
    {...props}
  />
);

export default Input;
