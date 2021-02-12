import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Circle from '../../components/Circle';
import Button from '../../components/Button';

import { 
  Container,
  Header,
  HeaderText,
  CenterScreen,
  BottonScreen,
  CircleContainer,
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
      </CenterScreen>
      
    </Container>
  );
};

export default Imc;
