import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Circle from '../../components/Circle';
import api from '../../api';

import { 
  Container,
  Header,
  HeaderText,
  CenterScreen,
  BottonScreen,
  CircleContainer,
  ContainerTextInput,
  InputText,
  TextMeasure,
  Button,
  ButtonText
} from './styles';


const Imc = () => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSendData = async () => {
    const response = await api.post('registro', {
      "peso": weight, 
      "altura": height
    });
  
    console.log('response: ', response);
  }

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderText>IMC</HeaderText>
      </Header>

      <CenterScreen>
        <CircleContainer>
            <Circle 
              borderColor={'#26E472'}
              sizeCircle={'147'}
              bottonText={'IMC'}
            />
        </CircleContainer>

        <ContainerTextInput>
          <InputText 
            placeholder='Seu peso...'
            //keyboardType='numeric' 
            onChangeText={weight => setWeight(weight)}
            value={weight}
          />
          <TextMeasure>(kg)</TextMeasure>
        </ContainerTextInput>

        <ContainerTextInput>
          <InputText 
            placeholder='Sua altura...'
            //keyboardType='numeric'
            onChangeText={height => setHeight(height)}
            value={height}
          />
          <TextMeasure>(m)</TextMeasure>
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
