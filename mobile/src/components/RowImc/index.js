import React from 'react';
import { Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatDistance} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Circle from '../Circle';
import api from '../../api';

import { 
  Container,
  ContainerText,
  ContainerButton,
  TextBold,
  Button,
  ButtonText
} from './styles';


const RowImc = (props) => {

  let imc = ((props.registro.peso / Math.pow(props.registro.altura, 2)).toFixed(2));
  
  const navigation = useNavigation();

  const destroyRegister = async () => {
    const response = await api.delete('registro/' + props.registro.id);

    if(response.status === 200){
      Alert.alert('Excluido com Sucesso');
      navigation.navigate('Dashboard', {destroy: true});
    }else{
      Alert.alert('Ocorreu um erro ao excluir, tente novamente.');
    }
  }

  return (
    <Container> 
      <Circle  
        borderColor={'#26E472'}
        sizeCircle={'74'}
        bottonText={'IMC'}
        value={imc}
      />
      
      <ContainerText>
        <Text style={{fontSize:16}}><TextBold>Peso: </TextBold>{props.registro.peso}</Text>
        <Text style={{fontSize:16}}><TextBold>Altura: </TextBold>{props.registro.altura}</Text>
        <Text style={{fontSize:16}}><TextBold>Data: </TextBold>{formatDistance(props.registro.data, new Date(), {locale: pt})}</Text>
      </ContainerText>

      <ContainerButton>
        <Button
            backgroundColor={'#26C2E4'}
        >
            <ButtonText
              fontSize={14}
              onPress={() => navigation.navigate('Imc', {
                id: props.registro.id,
                imc: imc,
                peso: props.registro.peso,
                altura: props.registro.altura
              })}
            >
              EDITAR
            </ButtonText>
        </Button>
        <Button
            backgroundColor={'#E42626'}
        >
            <ButtonText
              fontSize={14}
              onPress={destroyRegister}
            >
              EXCLUIR
            </ButtonText>
        </Button>
      </ContainerButton>
    </Container>
  );
}

export default RowImc;
