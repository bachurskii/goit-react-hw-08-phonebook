import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './header/header';
import { PrivateRoute } from './privateRoute/privateRoute';
import { PublicRoute } from './publicRoute/publicRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/authThunk';
import { NotFoundPage } from 'pages/notFoundPage/notFound';

const HomePage = lazy(() => import('../pages/homePage/home'));
const ContactsPage = lazy(() => import('../pages/contactPage/contact'));
const RegisterPage = lazy(() => import('../pages/registerPage/register'));
const LoginPage = lazy(() => import('../pages/loginPage/login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home"></Navigate>} />

          <Route path="home" element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
