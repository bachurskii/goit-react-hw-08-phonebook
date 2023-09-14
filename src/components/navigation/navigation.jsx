import { NavStyled } from './navigation.styled';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelector';
import { AuthNav } from 'components/autoNav/autoNav';
import { UserMenu } from 'components/userMenu/userMenu';
import { NavContainer } from './navigation.styled';

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <NavContainer>
      <NavStyled to="/home">Нome</NavStyled>
      {isLogin && <NavStyled to="/contacts">Contacts</NavStyled>}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </NavContainer>
  );
};
