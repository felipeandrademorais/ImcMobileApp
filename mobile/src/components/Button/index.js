import React from 'react';
import { Text } from 'react-native';

import { 
  Container,
  ButtonText
} from './styles';

const Button = (props) => {

  return (
    <Container
      backgroundColor={props.backgroundColor}
    > 
      <ButtonText
        fontSize={props.fontSize}
      >{props.text}</ButtonText>
    </Container>
  );
}

export default Button;
