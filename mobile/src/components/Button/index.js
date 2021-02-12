import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { 
  Container,
  ButtonText
} from './styles';

const Button = (props) => {

  const navigation = useNavigation();

  return (
    <Container
      backgroundColor={props.backgroundColor}
    > 
      <ButtonText
        // onPress={() => navigation.navigate(props.navigate)}
        fontSize={props.fontSize}
      >
        {props.text}
      </ButtonText>
    </Container>
  );
}

export default Button;
