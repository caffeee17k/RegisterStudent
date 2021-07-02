import styled from 'styled-components/native';
import { ImageProps } from 'react-native';
import { TextInputMask } from "react-native-masked-text";

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
  height: 55%;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 10px;
  elevation: 2;
  border-radius: 15px;
  background-color:  #c9cfcf;
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

export const TitleText = styled.Text`
  text-align: center;
  margin-top: 15%;
  margin-left: 5%;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const FieldsContainer = styled.ScrollView`
  width: 100%;
  max-width: 100%;
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

export const LabelAndInputContainer = styled.View`
  flex-direction: row;  
  justify-content: space-between;
  align-self: center;
  padding: 10px 0;
`;

export const LabelInput = styled.Text`
  position: absolute;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: white;
`;

export const FormInputTextMasked = styled(TextInputMask)`
  width: 90%;
  height: 55%;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 10px;
  elevation: 2;
  border-radius: 15px;
  background-color:  #c9cfcf;
`;