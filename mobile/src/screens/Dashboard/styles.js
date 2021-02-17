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

  justify-content: center;
  align-items: center; 
`;

export const BottonScreen = styled.View `
 flex:1;
`;

export const RowImcList = styled.FlatList `
  flex:1;
`;

export const CircleContainer = styled.View `
  flex:1;
  flex-direction: row;

  padding: 25px 0;
`;

export const TargetContainer = styled.View `
  width: 70%;

  flex-direction: row;
  
  justify-content: space-evenly;
  align-items: center;
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

