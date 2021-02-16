import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Circle from '../../components/Circle';
import RowImc from '../../components/RowImc';
import api from '../../api';

import { 
  Container,
  Header,
  HeaderText,
  CenterScreen,
  BottonScreen,
  CircleContainer,
  TargetContainer,
  Button,
  ButtonText
} from './styles';


const Dashboard = (props) => {

  const [registros, setRegistros] = useState('');
  const [imc, setImc] = useState('');
  const [weight, setWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const navigation = useNavigation();

  //Ordena os registros em ordem decrescente
  function sortJsonReturn(json){
    json.sort((a, b) =>{
      if(a.id < b.id){
        return 1;
      }
      if(a.id > b.id){
        return -1;
      }
      return 0;
    });

    return json;
  }

  //Busca registro de peso e altura 
  async function getWeightheight() {
    const response = await api.get('registro');

    //seta valor para cada state;
    setRegistros(sortJsonReturn(response.data));
    setImc((response.data[0].peso / Math.pow(response.data[0].altura, 2)).toFixed(2));
    setWeight(response.data[0].peso);

  }

  async function getTargetWeight() {
    const response = await api.get('peso-alvo');
    setTargetWeight(response.data.peso);
  }

  //Recupera registros do Banco de Dados
  useEffect(() => {
    navigation.addListener('focus', () => {
      getWeightheight();
      getTargetWeight();
    });
  }, [props]);

  /**
  * Condição para exibir peso alvo
  * ou botão cadastrar peso alvo;
  */

  let targetWeightButton = '';

  if(targetWeight == ''){

    targetWeightButton = (
        <Button backgroundColor={'#26E472'}>
          <ButtonText
            fontSize={20}
            onPress={() => navigation.navigate('Pesoalvo')}
          >
            CADASTRAR PESO-ALVO
          </ButtonText>
        </Button>
    );
  } else {
    targetWeightButton = (
      <TargetContainer>
        <Text style={{fontSize: 18}}>Peso Alvo: {targetWeight}</Text>
        <Button backgroundColor={'#26C2E4'}>
          <ButtonText
            fontSize={14}
            onPress={() => navigation.navigate('Pesoalvo', { targetWeight })}
          >
            Editar
          </ButtonText>
        </Button>
      </TargetContainer>
    );
  }

  return (
    <Container>
      <View>
        <Header>
          <HeaderText>MEU IMC</HeaderText>
        </Header>
        
        <CenterScreen>
         
          { targetWeightButton }
              
          <CircleContainer>
            <Circle 
              borderColor={'#26E472'}
              sizeCircle={'147'}
              bottonText={'IMC'}
              value={imc}
            />
            <Circle 
              borderColor={'#26C2E4'}
              sizeCircle={'147'}
              bottonText={'peso(kg)'}
              value={weight}
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
          {registros[0] && registros.map(registro => {
            return(
              <RowImc 
                key={registro.id}
                registro={registro} 
              />
            )
          })}
        </BottonScreen>
      </View>
    </Container>
  );
};

export default Dashboard;
