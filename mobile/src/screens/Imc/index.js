import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, Alert  } from 'react-native';
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


const Imc = (props) => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(0);
  const [idEdit, setIdEdit] = useState(''); 

  const navigation = useNavigation();

  const handleSendData = async () => {
    let id = idEdit ? idEdit : false;
    let response;

    if(id){
      response = await api.put('registro/' + id, {
        "peso": weight, 
        "altura": height
      });
    }else {
      response = await api.post('registro', {
        "peso": weight, 
        "altura": height
      });
    }

    if(response.status === 201 || response.status === 200){
      Alert.alert('Salvo com Sucesso!');
      navigation.navigate('Dashboard');
    }else{
      Alert.alert('Ocorreu um erro ao salvar, tente novamente.');
    }
  }

  //Pega os dados da rota
  useEffect(() => {
    async function getRegistros() {
      setIdEdit(props.route.params ? props.route.params.id : false);

      if(idEdit){
        setImc(props.route.params.imc);
        setHeight(props.route.params.altura);
        setWeight(props.route.params.peso);
      }
    }

    getRegistros();
    
  }, []);

  //Atualiza o imc após digitação do usuario;
  useEffect(() => {
    setImc((weight / Math.pow(height, 2)).toFixed(2));
  }, [weight, height]);

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
              value={imc}
            />
        </CircleContainer>

        <ContainerTextInput>
          <InputText 
            placeholder='Seu peso...'
            //keyboardType='numeric' 
            onChangeText={weight => setWeight(weight)}
          >{weight}</InputText>
          <TextMeasure>(kg)</TextMeasure>
        </ContainerTextInput>

        <ContainerTextInput>
          <InputText 
            placeholder='Sua altura...'
            //keyboardType='numeric'
            onChangeText={height => setHeight(height)}
          >{height}</InputText>
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
