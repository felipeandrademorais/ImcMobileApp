import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './routes';
import {ListContext} from './context/ListContext';

const App = () => {

  return (
    <NavigationContainer>
      <ListContext>
        <AppRoutes />
      </ListContext>
    </NavigationContainer>
  );
};

export default App;
