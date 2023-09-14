import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/loginForm/loginForm';
import { logIn } from 'redux/auth/authThunk';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(logIn(data));
  };

  return (
    <>
      <LoginForm onData={onLogin} />
    </>
  );
};

export default LoginPage;
