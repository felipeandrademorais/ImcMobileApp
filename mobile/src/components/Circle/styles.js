import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${props => props.sizeCircle}px;
  height: ${props => props.sizeCircle}px; 
  border-radius: ${props => props.radius}px;
  border-width: 4px;
  border-color: ${props => props.borderColor};

  margin: 10px;

  justify-content: center;
  align-items: center;
`;

export const CircleText = styled.Text `
  font-size: ${props => props.fontSize}px;
  color: ${props => props.fontColor}
`;
