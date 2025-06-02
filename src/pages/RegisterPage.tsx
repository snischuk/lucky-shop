import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const RegisterPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <form className="w-full max-w-sm space-y-4 rounded bg-white p-8 shadow-md">
      <h2 className="text-xl font-semibold">Реєстрація</h2>
      <Input type="text" placeholder="Ім'я" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Пароль" />
      <Button>Зареєструватись</Button>
    </form>
  </div>
);

export { RegisterPage };
