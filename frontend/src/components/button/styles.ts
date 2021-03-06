import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding: 0 10px;
  color: #312e38;
  width: 100%;
  font-weight: bold;
  margin-top: 18px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
