import type { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { PATH_PAGES } from '../constants/pathPages';
import { useTypedSelector } from '../hooks/useRedux';

const ProtectedRoute: FC = () => {
  const location = useLocation();
  const token = useTypedSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to={PATH_PAGES.AUTH} replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export { ProtectedRoute };
