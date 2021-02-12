import React from 'react';
import { Text } from 'react-native';

import Circle from '../Circle';
import Button from '../Button';

import { 
  Container,
  ContainerText,
  ContainerButton,
  TextBold
} from './styles';

const RowImc = () => {

  return (
    <Container> 
      <Circle  
        borderColor={'#26E472'}
        sizeCircle={'74'}
        bottonText={'IMC'}
      />
      
      <ContainerText>
        <Text style={{fontSize:16}}><TextBold>Peso: </TextBold>20 kg</Text>
        <Text style={{fontSize:16}}><TextBold>Altura: </TextBold>2(m)</Text>
        <Text style={{fontSize:16}}><TextBold>Data: </TextBold>11/12/2020</Text>
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
