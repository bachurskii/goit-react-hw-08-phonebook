import styled from 'styled-components';

export const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: #333;
`;

export const Field = styled.input`
  border: 1px solid #d3d3d3;
  cursor: pointer;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:hover {
    border-color: #1976d2;
  }

  &:focus {
    border-color: #ff5722;
    box-shadow: 0 0 5px rgba(255, 87, 34, 0.5);
  }
`;
