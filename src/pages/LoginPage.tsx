import type { FC } from 'react';

import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const LoginPage: FC = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <form className="w-full max-w-sm space-y-4 rounded bg-white p-8 shadow-md">
      <h2 className="text-xl font-semibold">Увійти</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Пароль" />
      <Button>Увійти</Button>
    </form>
  </div>
);

export { LoginPage };
