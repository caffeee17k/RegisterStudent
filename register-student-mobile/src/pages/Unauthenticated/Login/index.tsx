import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../../contexts/auth';

import {
  Container,
  ContainerContent,
  LogoLogin,
  InputText,
  LoginButton,
  TextButton,
} from './styles';
import { LoginProps } from '../../../contexts/types';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signed, signIn } = useAuth();

  // console.log(signed);

  async function handleSignIn(values: LoginProps) {
    values.email = email;
    values.password = password;

    Keyboard.dismiss();

    if (!email || !password) {
      Alert.alert('Aviso', 'Favor preenchar todos os campos!')
    } else {
      await signIn(values);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      //Função para sair do inputText com toque fora da área
      Keyboard.dismiss()
    }}>
      <Container>
        <LinearGradient
          colors={['#529EF0', '#376CA3']}
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <LogoLogin />
          <ContainerContent>
            <InputText
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu e-mail aqui"
              textContentType="emailAddress"
              autoCompleteType="email"
            />
            <InputText
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder="Digite sua senha aqui"
              textContentType="password"
              autoCompleteType="password"
            />
            <LoginButton onPress={handleSignIn}>
              <TextButton>Acessar</TextButton>
            </LoginButton>
          </ContainerContent>
        </LinearGradient>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Login;