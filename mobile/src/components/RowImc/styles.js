import styled from 'styled-components/native';

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