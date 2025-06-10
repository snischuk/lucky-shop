import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH_PAGES } from '../constants/pathPages';
import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/MainLayout';
import { ProductsLayout } from '../layouts/ProductsLayout';
import { AuthChoisePage } from '../pages/auth/AuthChoisePage';
import { CreateNewPasswordPage } from '../pages/auth/CreateNewPasswordPage';
import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { ResendPasswordPage } from '../pages/auth/ResendPasswordPage';
import { GenderHomePage } from '../pages/GenderHomePage';
import { MainHomePage } from '../pages/MainHomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductDetailPage } from '../pages/products/ProductDetailPage';
import { ProductsPage } from '../pages/products/ProductsPage';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={PATH_PAGES.MAIN} element={<MainLayout />}>
        <Route index element={<MainHomePage />} />

        <Route path={PATH_PAGES.GENDER_PARAM} element={<GenderHomePage />} />

        <Route path={PATH_PAGES.GENDER_PRODUCTS} element={<ProductsLayout />}>
          <Route index element={<ProductsPage />} />
          <Route
            path={PATH_PAGES.GENDER_PRODUCT_ID_PARAM}
            element={<ProductDetailPage />}
          />
        </Route>

        <Route path={PATH_PAGES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>

      <Route path={PATH_PAGES.AUTH} element={<AuthLayout />}>
        <Route index element={<AuthChoisePage />} />
        <Route path={PATH_PAGES.REGISTER} element={<RegisterPage />} />
        <Route path={PATH_PAGES.LOGIN} element={<LoginPage />} />
        <Route
          path={PATH_PAGES.FORGOT_PASSWORD}
          element={<ForgotPasswordPage />}
        />
        <Route
          path={PATH_PAGES.RESEND_PASSWORD}
          element={<ResendPasswordPage />}
        />
        <Route
          path={PATH_PAGES.CREATE_NEW_PASSWORD}
          element={<CreateNewPasswordPage />}
        />
      </Route>
    </Routes>
  );
};

export { AppRouter };
