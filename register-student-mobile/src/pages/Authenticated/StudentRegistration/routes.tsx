import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import StudentRegister from '../StudentRegistration';
import RegisterNewStudent from '../RegisterNewStudent';
import UpdateStudentRegister from '../UpdateStudentRegister';

const RegisterStudentStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="StudentRegister" headerMode="none">
      <Stack.Screen name="StudentRegister" component={StudentRegister} />
      <Stack.Screen name="RegisterNewStudent" component={RegisterNewStudent} />
      <Stack.Screen name="UpdateStudentRegister" component={UpdateStudentRegister} />
    </Stack.Navigator>
  );
};

export default RegisterStudentStack;
