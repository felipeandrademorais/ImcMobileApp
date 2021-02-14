import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';

import Circle from '../Circle';
import Button from '../Button';
import api from '../../api';

import { 
  Container,
  ContainerText,
  ContainerButton,
  TextBold
} from './styles';

const RowImc = (props) => {

  return (
    <Container> 
      <Circle  
        borderColor={'#26E472'}
        sizeCircle={'74'}
        bottonText={'IMC'}
      />
      
      <ContainerText>
        <Text style={{fontSize:16}}><TextBold>Peso: </TextBold>{props.registro.peso}</Text>
        <Text style={{fontSize:16}}><TextBold>Altura: </TextBold>{props.registro.altura}</Text>
        <Text style={{fontSize:16}}><TextBold>Data: </TextBold>{props.registro.data}</Text>
      </ContainerText>

      <ContainerButton>
        <Button 
          text={'EDITAR'}
          backgroundColor={'#26C2E4'}
          fontSize={14}
        />
        <Button 
          text={'EXCLUIR'}
          backgroundColor={'#E42626'}
          fontSize={14}
        />
      </ContainerButton>
    </Container>
  );
}

export default RowImc;
