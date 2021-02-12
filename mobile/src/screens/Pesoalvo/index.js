import React, { useEffect } from 'react';
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
  useEffect(() => {
    // async function teste() {
    //   const response = await api.get('/test');

    //   console.log('response: ', response);
    // }

    // teste();

  }, [])

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderText>IMC</HeaderText>
      </Header>

      <CenterScreen>
        <ContainerTextInput>
          <InputText 
            placeholder='Peso alvo...'
          />
          <TextMeasure>(kg)</TextMeasure>
        </ContainerTextInput>
      </CenterScreen>

      <BottonScreen>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
        <Button 
          navigate={'Dashboard'}
          text={'SALVAR'}
          backgroundColor={'#26C2E4'}
          fontSize={20}
        />
      </BottonScreen>
    </Container>
  );
};

export default Imc;
