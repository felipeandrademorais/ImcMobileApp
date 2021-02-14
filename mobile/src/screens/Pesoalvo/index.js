import React, { useEffect, useState } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
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


const Imc = () => {
  
  const [weight, setWeight] = useState('');
  const navigation = useNavigation();

  const handleSendData = async () => {
    const response = await api.post('peso-alvo', {
      "peso": weight, 
    });
  
    console.log('response: ', response);
  }

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
