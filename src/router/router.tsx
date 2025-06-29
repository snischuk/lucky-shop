import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { UiLoader } from '../components/ui/UiLoader';
import { PATH_PAGES } from '../constants/pathPages';
import { MainLayout } from '../layouts/MainLayout';
import { ProductsLayout } from '../layouts/ProductsLayout';
import { SecondaryLayout } from '../layouts/SecondaryLayout';

const UnsubscribeConfirmPage = lazy(() =>
  import('../pages/unsubscribe/UnsubscribeConfirmPage').then((module) => ({
    default: module.UnsubscribeConfirmPage,
  })),
);

const UnsubscribeCancelPage = lazy(() =>
  import('../pages/unsubscribe/UnsubscribeCancelPage').then((module) => ({
    default: module.UnsubscribeCancelPage,
  })),
);

const UnsubscribeSuccessPage = lazy(() =>
  import('../pages/unsubscribe/UnsubscribeSuccessPage').then((module) => ({
    default: module.UnsubscribeSuccessPage,
  })),
);

const AuthChoicePage = lazy(() =>
  import('../pages/auth/AuthChoicePage').then((module) => ({
    default: module.AuthChoicePage,
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
    <Suspense fallback={<UiLoader mode="fullscreen" size={80} />}>
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
          <Route
            path="*"
            element={<Navigate to={PATH_PAGES.NOT_FOUND} replace />}
          />
        </Route>

        <Route path={PATH_PAGES.AUTH} element={<SecondaryLayout />}>
          <Route index element={<AuthChoicePage />} />
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

        <Route
          path={PATH_PAGES.UNSUBSCRIPTION_CONFIRM}
          element={<SecondaryLayout />}
        >
          <Route index element={<UnsubscribeConfirmPage />} />
          <Route
            path={PATH_PAGES.UNSUBSCRIPTION_CANCEL}
            element={<UnsubscribeCancelPage />}
          />
          <Route
            path={PATH_PAGES.UNSUBSCRIPTION_SUCCESS}
            element={<UnsubscribeSuccessPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
