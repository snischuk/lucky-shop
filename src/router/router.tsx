import { Routes, Route } from 'react-router-dom';

// Layout
import Layout from '../components/Layout';

// Page Components
import HomePage from '../pages/HomePage';
// import ProductsPage from '../pages/ProductsPage';
// Цей компонент оброблятиме /products/women та /products/men
// import ProductCategoryPage from '../pages/ProductCategoryPage';
// import ProductDetailPage from '../pages/ProductDetailPage';
// import CartPage from '../pages/CartPage';
// import CheckoutPage from '../pages/CheckoutPage';
// import AccountProfilePage from '../pages/AccountProfilePage';
// import AccountOrdersPage from '../pages/AccountOrdersPage';
// import AccountSettingsPage from '../pages/AccountSettingsPage';
// import LoginPage from '../pages/LoginPage';
// import AdminPage from '../pages/AdminPage';
// import AdminProductsPage from '../pages/AdminProductsPage';
// import NotFoundPage from '../pages/NotFoundPage';

// Сторінки для відновлення пароля
// import WrongPasswordPage from '../pages/WrongPasswordPage';
// import ForgotPasswordPage from '../pages/ForgotPasswordPage';
// import ResendPasswordEmailPage from '../pages/ResendPasswordEmailPage';
// import CreateNewPasswordPage from '../pages/CreateNewPasswordPage';

// Guards (для захисту маршрутів)
// import AuthGuard from '../components/AuthGuard';
// import AdminGuard from '../components/AdminGuard';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* Маршрути продуктів */}
        {/* <Route path="products" element={<ProductsPage />} /> */}
        {/* Цей маршрут вже обробляє /products/women та /products/men */}
        {/* <Route path="products/:category" element={<ProductCategoryPage />} />
          <Route path="products/:category/:productId" element={<ProductDetailPage />} /> */}

        {/* Корзина */}
        {/* <Route path="cart" element={<CartPage />} /> */}

        {/* Захищений маршрут Checkout (тільки для авторизованих) */}
        {/* <Route element={<AuthGuard />}>
            <Route path="checkout" element={<CheckoutPage />} />
          </Route> */}

        {/* Маршрути аккаунта (вложенные) */}
        {/* <Route path="account">
            <Route path="profile" element={<AccountProfilePage />} />
            <Route path="orders" element={<AccountOrdersPage />} />
            <Route path="settings" element={<AccountSettingsPage />} />
          </Route> */}

        {/* Маршрути аутентифікації та відновлення пароля */}
        {/* <Route path="login" element={<LoginPage />} />
          <Route path="wrong-password" element={<WrongPasswordPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="resend-password-email" element={<ResendPasswordEmailPage />} />
          <Route path="create-new-password" element={<CreateNewPasswordPage />} /> */}

        {/* Захищений маршрут адмін-панелі (тільки для адмінів) */}
        {/* <Route element={<AdminGuard />}>
            <Route path="admin" element={<AdminPage />}>
              <Route path="products" element={<AdminProductsPage />} />
            </Route>
          </Route> */}

        {/* Маршрут 404 */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRouter;
