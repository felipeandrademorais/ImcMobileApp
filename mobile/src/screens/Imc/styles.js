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
  height:376px;
  padding: 30px;

  justify-content: center;
  align-items: center; 
`;


export const CircleContainer = styled.View `
  flex:1;
  flex-direction: row;

  padding: 45px 0;
`;