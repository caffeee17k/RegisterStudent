import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard, Alert, BackHandler, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../../contexts/auth';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  ContainerContent,
  InputText,
  TextButton,
  TwoColumnsContainer,
  TitleText,
  FieldsContainer,
  RegisterButton,
  LabelAndInputContainer,
  LabelInput,
  FormInputTextMasked
} from './styles';

import api from '../../../services/api';
import { RegisterNewStudentProps } from './types';

const UpdateStudentRegister = ({ route }) => {
  const { studentDataProps } = route.params;

  const navigation = useNavigation();

  const [studentsData, setStudentsData] = useState<RegisterNewStudentProps>({} as RegisterNewStudentProps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStudentsData(studentDataProps);
  }, [])

  async function updateStudent(idStudent: any) {
    setLoading(true);

    try {
      const response = await api.put(`alunos/${idStudent}`, studentsData).then((data) => {
        Alert.alert('Cadastrado Atualizado', 'Cadastro atualizado com sucesso!');
        console.log(data);
        setLoading(false);
        navigation.navigate('StudentRegister');
      }).catch(err => {
        Alert.alert('Falha ao atualizar cadastro', 'Favor verifique se os dados foram digitados corretamente.');
        console.log(err);
        setLoading(false);
      });
      return response;
    } catch (error) {
      Alert.alert('Falha ao atualizar cadastro', 'Favor verifique se os dados foram digitados corretamente.');
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Container>
      <LinearGradient
        colors={['#529EF0', '#376CA3']}
        style={{ flex: 1 }}
      >
        <TitleText>Cadastrar Aluno</TitleText>
        <FieldsContainer>

          <LabelAndInputContainer>
            <LabelInput>Nome</LabelInput>
            <InputText
              value={studentsData.nome}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, nome: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Data de Nascimento</LabelInput>
            <FormInputTextMasked
              type="datetime"
              options={{
                format: 'YYYY/MM/DD'
              }}
              value={studentsData.data_de_nascimento}
              onChangeText={(text) => {
                setStudentsData({
                  ...studentsData, data_de_nascimento:
                    text.split('/').join('-')
                })
              }}
              placeholder="DATA NO FORMATO ANO-MÊS-DIA"
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Nacionalidade</LabelInput>
            <InputText
              value={studentsData.nacionalidade}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, nacionalidade: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Naturalidade</LabelInput>
            <InputText
              value={studentsData.naturalidade}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, naturalidade: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Sexo</LabelInput>
            <InputText
              value={studentsData.sexo}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, sexo: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Nome da mãe</LabelInput>
            <InputText
              value={studentsData.nome_da_mae}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, nome_da_mae: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Data conclusão ensino médio</LabelInput>
            <FormInputTextMasked
              type="datetime"
              options={{
                format: 'YYYY/MM/DD'
              }}
              placeholder="DATA NO FORMATO ANO-MÊS-DIA"
              value={studentsData.data_conclusao_ensino_medio}
              onChangeText={(text) => {
                setStudentsData({
                  ...studentsData, data_conclusao_ensino_medio:
                    text.split('/').join('-')
                })
              }}
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>RG</LabelInput>
            <InputText
              value={studentsData.rg}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, rg: text })
              }}
              // textContentType="addressCity"
              autoCompleteType="email"
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Órgão Expedidor (RG)</LabelInput>
            <InputText
              value={studentsData.orgao_expedidor_rg}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, orgao_expedidor_rg: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>UF (RG)</LabelInput>
            <InputText
              value={studentsData.uf_rg}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, uf_rg: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Data Expedição (RG)</LabelInput>
            <FormInputTextMasked
              type="datetime"
              options={{
                format: 'YYYY/MM/DD'
              }}
              placeholder="DATA NO FORMATO ANO-MÊS-DIA"
              value={studentsData.data_expedicao_rg}
              onChangeText={(text) => {
                setStudentsData({
                  ...studentsData, data_expedicao_rg:
                    text.split('/').join('-')
                })
              }}
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>CPF</LabelInput>
            <InputText
              value={studentsData.cpf}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, cpf: text })
              }}
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Endereço</LabelInput>
            <InputText
              value={studentsData.endereco}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, endereco: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>E-mail</LabelInput>
            <InputText
              value={studentsData.email}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, email: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Telefone</LabelInput>
            <InputText
              value={studentsData.telefone}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, telefone: text })
              }}
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Código do Banco</LabelInput>
            <InputText
              value={studentsData.codigo_do_banco}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, codigo_do_banco: text })
              }}
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Número da agência</LabelInput>
            <InputText
              value={studentsData.numero_da_agencia}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, numero_da_agencia: text })
              }}
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Tipo de conta</LabelInput>
            <InputText
              value={studentsData.tipo_de_conta}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, tipo_de_conta: text })
              }}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <LabelInput>Número da conta</LabelInput>
            <InputText
              value={studentsData.numero_da_conta}
              onChangeText={(text) => {
                setStudentsData({ ...studentsData, numero_da_conta: text })
              }}
              keyboardType="phone-pad"
            />
          </LabelAndInputContainer>

        </FieldsContainer>
        <RegisterButton
          onPress={() => updateStudent(studentDataProps.id)}
          disabled={
            typeof (studentsData.nome) == 'undefined' ? true : false
          }
          style={{
            opacity: typeof (studentsData.nome) == 'undefined' ? 0.6 : 1
          }}
        >
          {loading ?
            (
              <ActivityIndicator color="#FFF" size={25} />
            ) : (
              <TextButton>Atualizar Cadastro</TextButton>
            )
          }
        </RegisterButton>

      </LinearGradient>
    </Container>
  );
}

export default UpdateStudentRegister;