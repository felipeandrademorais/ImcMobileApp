import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  background-color: #E5E5E5;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.View `
  width: 100%;
  background-color: #26C2E4;
`;

export const HeaderText = styled.Text `
  width: 100%;
  font-size: 24px; 
  text-align: center;
  margin: 14px 0;
  color: #FFFFFF;
`;

export const CenterScreen = styled.View `
  width: 100%;
  height:376px;
  padding: 30px;

  justify-content: center;
  align-items: center; 
`;

export const BottonScreen = styled.View `
  width: 100%;

  justify-content: center;
  align-items: center; 
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
