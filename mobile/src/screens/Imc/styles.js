import styled from 'styled-components/native';

export const Container = styled.View`
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
  padding: 30px;

  justify-content: space-around;
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