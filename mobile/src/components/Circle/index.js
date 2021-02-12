import React from 'react';
import Svg, {Circle as SvgCircle} from 'react-native-svg';
import { Text, Dimensions } from 'react-native';

import { 
  Container,
  CircleText
} from './styles';

const Circle = (props) => {

  const text = '8,9';

  return (
    <Container 
      sizeCircle={props.sizeCircle}
      borderColor={props.borderColor}
      radius={props.sizeCircle/2}
    > 
      <CircleText
        fontSize={props.sizeCircle/3}
        fontColor={'#000000'}
      >
      {text}
      </CircleText>
      <CircleText
        fontSize={props.sizeCircle/7}
        fontColor={'#C4C4C4'}
      >{props.bottonText}</CircleText>
    </Container>
  );
}

export default Circle;
