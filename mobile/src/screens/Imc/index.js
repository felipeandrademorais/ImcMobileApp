import React, { useEffect, useState } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Circle from '../../components/Circle';
import Button from '../../components/Button';

import { 
  Container,
  Header,
  HeaderText,
  CenterScreen,
  BottonScreen,
  CircleContainer,
  ContainerTextInput,
  InputText,
  TextMeasure
} from './styles';



// import api from '../../api';

const Imc = () => {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleWeight = (e) => {
    setWeight(e.currentTarget.value);
  }

  const handleHeight = (e) => {
    setHeight(e.currentTarget.value);
  }

  const handleSendData = (e) => {
    console.log(e);
    // const response = await api.post('/registro', {
    //   "peso": weight,
    //   "altura": height
    // });
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
            keyboardType='number-pad' 
            onChange={handleWeight}
          />
          <TextMeasure>(kg)</TextMeasure>
        </ContainerTextInput>

        <ContainerTextInput>
          <InputText 
            placeholder='Sua altura...'
            keyboardType='number-pad'
            onChange={handleHeight}
          />
          <TextMeasure>(m)</TextMeasure>
        </ContainerTextInput>
      </CenterScreen>

      <BottonScreen>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
        <Button 
          onPress={() => this.handleSendData}
          text={'SALVAR'}
          backgroundColor={'#26C2E4'}
          fontSize={20}
        />
      </BottonScreen>
    </Container>
  );
};

export default Imc;
