import type { FC, FormEvent } from 'react';

import { useTypedDispatch } from '../hooks/useRedux';
import { setCredentials } from '../redux/authSlice';
import { useLoginMutation } from '../services/authApi';

const LoginForm: FC = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useTypedDispatch();

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const data = await login({ email, password }).unwrap();
      dispatch(setCredentials(data));
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit" disabled={isLoading}>
        Login
      </button>
      {error && <p>Error</p>}
    </form>
  );
};

export { LoginForm };
