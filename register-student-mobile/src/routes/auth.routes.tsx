import React from 'react';
import Login from '../pages/Unauthenticated/Login';

import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
); 

export default AuthRoutes;