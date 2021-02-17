import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Circle from '../../components/Circle';
import RowImc from '../../components/RowImc';
import api from '../../api';

import { 
  Container,
  CenterScreen,
  BottonScreen,
  CircleContainer,
  TargetContainer,
  Button,
  ButtonText,
  RowImcList
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

    if(response.data != ''){
      //Ordena os resultados por ordem de id
      const responseSorted = sortJsonReturn(response.data)
      const responseArray = [];

      //Converte de Objeto para Array
      responseSorted.forEach((data) => {
        responseArray.push({
          data: data.data,
          altura: data.altura,
          peso: data.peso,
          id: data.id
        });
      });

      console.log(responseArray);

      //seta valor para cada state;
      setRegistros(responseArray);
      setImc((response.data[0].peso / Math.pow(response.data[0].altura, 2)).toFixed(2));
      setWeight(response.data[0].peso);
    }else{
      setImc(0);
      setWeight(0);
    }
  
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
  }, []);

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
          <RowImcList 
              data={registros}
              keyExtractor={(obj) => obj.id.toString()}
              renderItem={(obj) => (
                <RowImc 
                  key={obj.item.id}
                  registro={obj.item} 
                />
              )}
            />
        </BottonScreen>
    </Container>
  );
};

export default Dashboard;
