import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../api';

import { 
  Container,
  Header,
  HeaderText,
  CenterScreen,
  BottonScreen,
  ContainerTextInput,
  InputText,
  TextMeasure,
  Button,
  ButtonText
} from './styles';


const Imc = (props) => {
  
  const [weight, setWeight] = useState('');
  const navigation = useNavigation();

  const handleSendData = async () => {
    const response = await api.put('peso-alvo', {
      "peso": weight, 
    });
  
    if(response.status === 200){
      Alert.alert('Salvo com Sucesso!');
      navigation.navigate('Dashboard');
    }else{
      Alert.alert('Ocorreu um erro ao salvar, tente novamente.');
    }
  }
  
  useEffect(() => {
    setWeight(props.route.params ? props.route.params.targetWeight : '');
  }, []);

  return (
    <Container>
      <Header>
        <HeaderText>IMC</HeaderText>
      </Header>

      <CenterScreen>
        <ContainerTextInput>
          <InputText 
            placeholder='Peso alvo...'
            onChangeText={weight => setWeight(weight)}
            value={weight}
          />
          <TextMeasure>(kg)</TextMeasure>
        </ContainerTextInput>
      </CenterScreen>

      <BottonScreen>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
        <Button
            backgroundColor={'#26C2E4'}
            title="Salvar"
          >
            <ButtonText
              fontSize={20}
              onPress={handleSendData}
            >
              SALVAR
            </ButtonText>
        </Button>    
      </BottonScreen>
    </Container>
  );
};

export default Imc;
