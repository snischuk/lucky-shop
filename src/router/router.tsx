import { type FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH_PAGES } from '../constants/pathPages';
import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/MainLayout';
import { ProductsLayout } from '../layouts/ProductsLayout';
// import { AuthChoisePage } from '../pages/auth/AuthChoisePage';
// import { CreateNewPasswordPage } from '../pages/auth/CreateNewPasswordPage';
// import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
// import { LoginPage } from '../pages/auth/LoginPage';
// import { RegisterPage } from '../pages/auth/RegisterPage';
// import { ResendPasswordPage } from '../pages/auth/ResendPasswordPage';
// import { GenderHomePage } from '../pages/GenderHomePage';
// import { MainHomePage } from '../pages/MainHomePage';
// import { NotFoundPage } from '../pages/NotFoundPage';
// import { ProductDetailPage } from '../pages/products/ProductDetailPage';
// import { ProductsPage } from '../pages/products/ProductsPage';

const AuthChoisePage = lazy(() =>
  import('../pages/auth/AuthChoisePage').then((module) => ({
    default: module.AuthChoisePage,
  })),
);
const CreateNewPasswordPage = lazy(() =>
  import('../pages/auth/CreateNewPasswordPage').then((module) => ({
    default: module.CreateNewPasswordPage,
  })),
);
const ForgotPasswordPage = lazy(() =>
  import('../pages/auth/ForgotPasswordPage').then((module) => ({
    default: module.ForgotPasswordPage,
  })),
);
const LoginPage = lazy(() =>
  import('../pages/auth/LoginPage').then((module) => ({
    default: module.LoginPage,
  })),
);
const RegisterPage = lazy(() =>
  import('../pages/auth/RegisterPage').then((module) => ({
    default: module.RegisterPage,
  })),
);
const ResendPasswordPage = lazy(() =>
  import('../pages/auth/ResendPasswordPage').then((module) => ({
    default: module.ResendPasswordPage,
  })),
);
const GenderHomePage = lazy(() =>
  import('../pages/GenderHomePage').then((module) => ({
    default: module.GenderHomePage,
  })),
);
const MainHomePage = lazy(() =>
  import('../pages/MainHomePage').then((module) => ({
    default: module.MainHomePage,
  })),
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  })),
);
const ProductDetailPage = lazy(() =>
  import('../pages/products/ProductDetailPage').then((module) => ({
    default: module.ProductDetailPage,
  })),
);
const ProductsPage = lazy(() =>
  import('../pages/products/ProductsPage').then((module) => ({
    default: module.ProductsPage,
  })),
);

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export { AppRouter };
