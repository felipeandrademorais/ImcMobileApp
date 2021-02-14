import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Circle from '../../components/Circle';
//import RowImc from '../../components/RowImc';
import api from '../../api';

import { 
  Container,
  Header,
  HeaderText,
  CenterScreen,
  BottonScreen,
  CircleContainer,
  Button,
  ButtonText
} from './styles';


const Dashboard = () => {

  const [registros, setRegistros] = useState('');

  useEffect(() => {
    async function getRegistros() {
      const response = await api.get('registro');
      setRegistros(response.data);

      console.log(registros);
    }

    getRegistros();

  }, [])
  
  const navigation = useNavigation();

  return (
    <Container>
      <View>
        <Header>
          <HeaderText>MEU IMC</HeaderText>
        </Header>
        
        <CenterScreen>
          <Button
            backgroundColor={'#26E472'}
          >
            <ButtonText
              fontSize={20}
              onPress={() => navigation.navigate('Pesoalvo')}
            >
              CADASTRAR PESO-ALVO
            </ButtonText>
          </Button>          
          <CircleContainer>
            <Circle 
              borderColor={'#26E472'}
              sizeCircle={'147'}
              bottonText={'IMC'}
              data={registros}
            />
            <Circle 
              borderColor={'#26C2E4'}
              sizeCircle={'147'}
              bottonText={'peso(kg)'}
              data={registros}
            />
          </CircleContainer>
  
          <Button
            backgroundColor={'#26C2E4'}
          >
            <ButtonText
              onPress={() => navigation.navigate('Imc')}
              fontSize={24}
            >
              Cadastrar
            </ButtonText>
          </Button>
        </CenterScreen>
        
          
        <BottonScreen>
          {/* {registros.map(registro => (
            <RowImc registro={registro}/>
          ))} */}
        </BottonScreen>
      </View>
    </Container>
  );
};

export default Dashboard;
