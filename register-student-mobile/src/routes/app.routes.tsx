import React from 'react';
import RegisterStudentStack from '../pages/Authenticated/StudentRegistration/routes';

import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Cadastrar Aluno" component={RegisterStudentStack} />
  </AppStack.Navigator>
); 

export default AppRoutes;