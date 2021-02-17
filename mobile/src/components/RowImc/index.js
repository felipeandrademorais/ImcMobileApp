import React, {useContext} from 'react';
import { Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Circle from '../Circle';
import api from '../../api';
import {setDeleteTrue, useDeleteRow, setDeleteFalse} from '../../context/ListContext';

import { 
  Container,
  ContainerText,
  ContainerButton,
  TextBold,
  Button,
  ButtonText
} from './styles';


const RowImc = (props) => {

  const { peso, altura, id, data } = props.registro;
  const navigation = useNavigation();
  
  let imc = ((peso / Math.pow(altura, 2)).toFixed(2));

  const destroyRegister = async () => {
    const response = await api.delete('registro/' + id);
  
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
        <Text style={{fontSize:16}}><TextBold>Peso: </TextBold>{peso}</Text>
        <Text style={{fontSize:16}}><TextBold>Altura: </TextBold>{altura}</Text>
        <Text style={{fontSize:16}}><TextBold>Data: </TextBold>{format(data, "dd/LL/yyyy HH:mm",{locale: pt})}</Text>
      </ContainerText>

      <ContainerButton>
        <Button
            backgroundColor={'#26C2E4'}
        >
            <ButtonText
              fontSize={14}
              onPress={() => navigation.navigate('Imc', {
                id: id,
                imc: imc,
                peso: peso,
                altura: altura
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
