import styled from 'styled-components/native';
import { ImageProps } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerContent = styled.View`
  width: 90%;
  height: 45%;
  align-self: center;
  justify-content: center;
  elevation: 7;
  background-color: white;
  border-radius: 35px;
  margin-bottom: 150px;
`;

export const LogoLogin = styled.Image.attrs(
  (): ImageProps => ({
    // eslint-disable-next-line global-require
    source: require('./assets/Logotipo.png'),
    flex: 1,
    width: 1,
    height: 1,
    resizeMode: 'contain'
  })
)`
  align-self: center;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 100px;
`;

export const InputText = styled.TextInput`
  width: 90%;
  height: 15%;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 10px;
  elevation: 2;
  border-radius: 15px;
  background-color: #c9cfcf;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 60%;
  height: 17%;
  margin-top: 20px;
  align-self: center;
  border-radius: 25px;
  background-color: chocolate;
`;
export const TextButton = styled.Text`
  margin: auto;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;