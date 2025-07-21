import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { UiButton } from '../components/ui/UiButton';
import { useTypedDispatch } from '../hooks/useRedux';
import { logout } from '../redux/authSlice';

const CabinetPage: FC = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="mx-auto flex max-w-custom-1440 flex-col items-center justify-center py-[100px]">
      <h1 className="text-center font-family-primary text-[32px] leading-[1.25] text-black">
        Кабінет користувача
      </h1>
      <UiButton
        className="mt-9 w-[352px] text-[20px] leading-[1.175]"
        variant="filled"
        onClick={handleLogout}
      >
        Вийти з облікового запису
      </UiButton>
    </div>
  );
};

export { CabinetPage };
