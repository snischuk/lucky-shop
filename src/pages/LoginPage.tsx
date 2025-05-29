import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4">
      <h2 className="text-xl font-semibold">Увійти</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Пароль" />
      <Button>Увійти</Button>
    </form>
  </div>
);

export default LoginPage;
