import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 10px 20px;
`;

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  margin-right: 20px;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722;
  }

  &.active {
    color: #ff5722;
    border-bottom: 2px solid #ff5722;
  }
`;
