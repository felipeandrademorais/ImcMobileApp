import React, { useEffect, useState } from 'react';

import { 
  Container,
  CircleText
} from './styles';

const Circle = (props) => {

  const [borderColor, setBorderColor] = useState(props.borderColor);

  useEffect(() => {
    function changeImcColor(){
      const imc = parseFloat(props.value);

      if(props.bottonText === 'IMC'){
          if(imc < 16){ 
            setBorderColor('#e42626');
          }else if(imc > 16 && imc < 18.4){
            setBorderColor('#ffff00');
          }else if(imc > 18.5 && imc < 29.9){
            setBorderColor('#26e472');
          }else if(imc > 30 && imc < 39.9){
            setBorderColor('#ffff00');
          }else {
            setBorderColor('#e42626');
          }
      }else{
        setBorderColor(props.borderColor);
      }
    }

    changeImcColor();

  }, [props.value]);

  return (
    <Container 
      sizeCircle={props.sizeCircle}
      borderColor={borderColor}
      radius={props.sizeCircle/2}
    > 
      <CircleText
        fontSize={props.sizeCircle/3.5}
        fontColor={'#000000'}
      >
      {props.value}
      </CircleText>
      <CircleText
        fontSize={props.sizeCircle/7}
        fontColor={'#C4C4C4'}
      >{props.bottonText}</CircleText>
    </Container>
  );
}

export default Circle;
