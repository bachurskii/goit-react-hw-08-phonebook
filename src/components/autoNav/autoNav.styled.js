import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  margin-right: 20px;
  color: #1976d2;
  transition: color 0.3s ease; 

  &:hover {
    color: #ff5722; 
  }

  &.active {
    color: #000; 
`;
