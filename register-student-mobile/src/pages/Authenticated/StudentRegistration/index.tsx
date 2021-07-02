import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard, Alert, BackHandler, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../../contexts/auth';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  ContainerContent,
  InputText,
  LogoutButton,
  TextButton,
  TextWelcome,
  TwoColumnsContainer,
  TitleText,
  ListContainer,
  ContainerEmpty,
  WarningText,
  RegisterButton,
} from './styles';

import api from '../../../services/api';

import ExitButton from './components/ExitButton';

import ListItem from './components/ListItem';

import ShowStudentInformationModal from './components/ShowStudentInformationModal';

const StudentRegister = () => {
  const { signOut, user } = useAuth();

  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({});

  function handleSignOut() {
    signOut();
  }

  async function fetchStudent() {
    const response = await api.get("alunos").then((data: any) => {
      // alert(data);
      setStudentsData(data.data);
      setLoading(false);
    }).catch(err => console.log(err)).finally(() => setLoading(false));
    return response;
  }

  async function deleteStudent(idStudent: any) {
    setLoading(true);

    const response = await api.delete(`alunos/${idStudent}`).then(() => {
      // alert(data);
      fetchStudent();
      setLoading(false);
    }).catch(() => Alert.alert('Aviso', 'Não foi possível deletar o cadastro do aluno.')).finally(() => setLoading(false));
    return response;
  }

  function showStudent(item) {
    setData(item);
    setIsModalVisible(true);
    console.log(item);
  }

  useEffect(() => {
    fetchStudent();
  }, [isFocused])

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        const onPressYes = () => {
          signOut();
        };

        Alert.alert('Sair', 'Você deseja realmente sair?', [
          {
            text: 'Sim',
            onPress: onPressYes,
          },
          {
            text: 'Cancelar',
            style: 'cancel',
          },
        ], {
          cancelable: true
        });

        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [signOut])
  );

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
          <TwoColumnsContainer>
            <TextWelcome>Bem vindo(a), {user?.name}</TextWelcome>
            <ExitButton
              Icon={() => <Feather name="log-out" size={30} color="chocolate" />}
              onPress={handleSignOut}
            />
          </TwoColumnsContainer>

          <ContainerContent>
            <TitleText>Alunos Cadastrados</TitleText>

            {loading && (
              <ActivityIndicator
                color="#FAAA"
                size={30}
              />
            )}

            {!loading && studentsData.length === 0 && (
              <ContainerEmpty>
                <WarningText>Você ainda não possui nenhum link :(</WarningText>
              </ContainerEmpty>
            )}
            <ListContainer
              data={studentsData}
              keyExtractor={(item: any) => String(item.id)}
              renderItem={({ item }) =>
                <ListItem
                  data={item}
                  deleteItem={deleteStudent}
                  selectedItem={showStudent}
                  changeItem={() => navigation.navigate('UpdateStudentRegister', {studentDataProps: item})}
                />
              }
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
            />
            <RegisterButton onPress={() => navigation.navigate('RegisterNewStudent')}>
              <TextButton>Cadastrar Novo Aluno</TextButton>
            </RegisterButton>
          </ContainerContent>

          {isModalVisible &&
            <ShowStudentInformationModal
              dataItem={data}
              isShowModal={setIsModalVisible}
            />
          }

        </LinearGradient>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default StudentRegister;