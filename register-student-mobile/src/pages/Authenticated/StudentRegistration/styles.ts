import styled from 'styled-components/native';
import { ImageProps } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerContent = styled.View`
  width: 100%;
  height: 75%;
  margin-top: 20px;
  /* align-self: center; */
  /* justify-content: center; */
  /* align-items: center; */
  elevation: 7;
  background-color:  white;
  border-radius: 15px;
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
  background-color:  #c9cfcf;
`;

export const LogoutButton = styled.TouchableOpacity`
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

export const TwoColumnsContainer = styled.View`
  margin-top: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextWelcome = styled.Text`
  /* margin-top: 20px; */
  margin-left: 5%;
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

export const TitleText = styled.Text`
  text-align: center;
  margin-top: 10%;
  margin-left: 5%;
  font-size: 25px;
  font-weight: bold;
  color: gray;
`;

export const ListContainer = styled.FlatList`
  margin-top: 30px;
`;

export const ContainerEmpty = styled.View`
  margin-top: 50%;
  align-items: center;
`;

export const WarningText = styled.Text`
  color: red;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 300px;
  height: 60px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
  background-color: chocolate;
`;