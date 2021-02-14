import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Imc from '../screens/Imc';
import Pesoalvo from '../screens/Pesoalvo';

const App = createStackNavigator();

const AppRoutes = () => {

  return(
    <App.Navigator
      screenOptions={{
        headerShown: false
      }}
      // initialRouteName="Imc"
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Imc" component={Imc} />
      <App.Screen name="Pesoalvo" component={Pesoalvo} />
    </App.Navigator>
  );
}

export default AppRoutes;