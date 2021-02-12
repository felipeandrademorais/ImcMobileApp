import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Circle from '../../components/Circle';
import Button from '../../components/Button';
import RowImc from '../../components/RowImc';

import { 
  Container,
  Header,
  HeaderText,
  CenterScreen,
  BottonScreen,
  CircleContainer,
} from './styles';



// import api from '../../api';

const Dashboard = () => {
  // useEffect(() => {
  //   async function teste() {
  //     const response = await api.get('/test');

  //     console.log('response: ', response);
  //   }

  // }, [])

  
  const navigation = useNavigation();

  return (
    <Container>
      <View>

        <Header>
          <HeaderText>MEU IMC</HeaderText>
        </Header>
        
        <CenterScreen>
          <Button 
            navigate={'Pesoalvo'}
            text={'CADASTRAR PESO-ALVO'}
            backgroundColor={'#26E472'}
            fontSize={20}
          />
          
          <CircleContainer>
            <Circle 
              borderColor={'#26E472'}
              sizeCircle={'147'}
              bottonText={'IMC'}
            />
            <Circle 
              borderColor={'#26C2E4'}
              sizeCircle={'147'}
              bottonText={'peso(kg)'}
            />
          </CircleContainer>
  
          <Button 
            navigate={'Imc'}
            text={'CADASTRAR'}
            backgroundColor={'#26C2E4'}
            fontSize={24}
          />
        </CenterScreen>
        
          
        <BottonScreen>
            <RowImc />
            <RowImc />
            <RowImc />
            <RowImc />
            <RowImc />
        </BottonScreen>
      </View>
    </Container>
  );
};

export default Dashboard;
