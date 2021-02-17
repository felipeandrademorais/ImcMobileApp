import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Imc from '../screens/Imc';
import Pesoalvo from '../screens/Pesoalvo';

const App = createStackNavigator();

const AppRoutes = () => {

  const headerStyle = {
    headerStyle: {
      backgroundColor: '#26C2E4',
    },
    headerTitleStyle: {
      alignSelf: 'center'
    },
    headerTintColor: '#fff'
  }; 


  return(
    <App.Navigator>
      <App.Screen name="Dashboard" component={Dashboard} options={{title: 'MEU IMC', ... headerStyle}}/>
      <App.Screen name="Imc" component={Imc} options={{title: 'IMC', ... headerStyle}}/>
      <App.Screen name="Pesoalvo" component={Pesoalvo} options={{title: 'PESO-ALVO', ... headerStyle}}/>
    </App.Navigator>
  );
}

export default AppRoutes;