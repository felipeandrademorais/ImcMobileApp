import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  border: 1px;
  border-color: #c4c4c4; 
  
  flex-direction: row;
`;

export const ContainerText = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 20px 12px;
`;

export const ContainerButton = styled.View `
  flex-direction: column;

  padding: 0 4px;

  justify-content: space-around;

`;

export const TextBold = styled.Text `
  font-weight: bold;
`;

export const Button = styled(RectButton)`
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