import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #E5E5E5;
  flex: 1;
  flex-direction: column;
`;

export const CenterScreen = styled.View `
  flex:1;
  padding: 30px;

  justify-content: flex-end;
  align-items: center; 
`;

export const BottonScreen = styled.View `
  flex:1;
  padding: 15px;
  flex-direction: row;

  justify-content: space-around; 
  align-items: flex-end;
`;

export const CircleContainer = styled.View `
  width:100%;
  margin: 10px;

  justify-content: center;
  align-items: center;
`;

export const ContainerTextInput = styled.View `
  width: 100%;
  height: auto;
  margin: 10px;

  flex-direction: row;
  align-items: center;
`;  

export const InputText = styled.TextInput `
  width:80%;
  height: 60px;
  padding: 0 16px;
  background: #F8F8F8;
  border-radius: 10px;
  border-width: 1px;
  border-color: #c4c4c4;

  color: #c4c4c4;
  font-size: 16px;
`;

export const TextMeasure = styled.Text `
  width: 100%;
  font-size: 24px;
  padding: 10px;
  color: #c4c4c4;
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