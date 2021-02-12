import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${props => props.backgroundColor};
  width: auto;
  height: 40px;
  border-radius: 4px;

  padding: 19px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text `
  color: #fff;
  font-size: ${props => props.fontSize}px;
`;

