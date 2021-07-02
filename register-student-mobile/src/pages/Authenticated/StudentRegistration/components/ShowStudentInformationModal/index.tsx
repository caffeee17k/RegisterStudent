import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Alert,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import BackButton from './components/BackButton';
import {
  ModalContainer,
  ModalContent,
  ShowInformationsStudent,
  CaptionText,
  LabelText,
  CancelModalButton,
  ConfirmModalButton,
  ModalTextButton,
  ModalBackground,
  ContainerButton,
  ModalTextRedButton,
  ModalTextBoldLarge,
} from './styles';

const ShowStudentInformationModal = ({ isShowModal, dataItem }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const opacity = useState(new Animated.Value(0))[0];

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    fadeIn();
  }, [])


  function handleCloseModal() {
    fadeOut();
    setTimeout(() => {
      setIsModalVisible(false);
      isShowModal(false);
    }, 500)
  }

  return (
    <ModalContainer
      animationType="none"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        fadeOut();
        setTimeout(() => {
          setIsModalVisible(false);
          isShowModal(false);
        }, 500)
      }}>
      <Animated.View style={[{ opacity, flex: 1 }]}>
        <ModalBackground
          activeOpacity={1}
        // onPress={handleCloseModal}
        >
          {/* <TouchableWithoutFeedback> */}
          <ModalContent>
          <BackButton
              Icon={() => <Feather name="log-out" size={30} color="chocolate" />}
              onPress={handleCloseModal}
            />
            <ShowInformationsStudent>
              <LabelText>ID: <CaptionText>{dataItem.id}</CaptionText></LabelText>
              <LabelText>Nome: <CaptionText>{dataItem.nome}</CaptionText></LabelText>
              <LabelText>Data de Nascimento: <CaptionText>{dataItem.data_de_nascimento}</CaptionText></LabelText>
              <LabelText>nacionalidade: <CaptionText>{dataItem.nacionalidade}</CaptionText></LabelText>
              <LabelText>naturalidade: <CaptionText>{dataItem.naturalidade}</CaptionText></LabelText>
              <LabelText>sexo: <CaptionText>{dataItem.sexo}</CaptionText></LabelText>
              <LabelText>Nome da Mãe: <CaptionText>{dataItem.nome_da_mae}</CaptionText></LabelText>
              <LabelText>Data Conclusão Ensino Médio: <CaptionText>{dataItem.data_conclusao_ensino_medio}</CaptionText></LabelText>
              <LabelText>RG: <CaptionText>{dataItem.rg}</CaptionText></LabelText>
              <LabelText>Orgão Expedidor RG: <CaptionText>{dataItem.orgao_expedidor_rg}</CaptionText></LabelText>
              <LabelText>UF RG: <CaptionText>{dataItem.uf_rg}</CaptionText></LabelText>
              <LabelText>Data Expedição RG: <CaptionText>{dataItem.data_expedicao_rg}</CaptionText></LabelText>
              <LabelText>CPF: <CaptionText>{dataItem.cpf}</CaptionText></LabelText>
              <LabelText>Endereço: <CaptionText>{dataItem.endereco}</CaptionText></LabelText>
              <LabelText>E-mail: <CaptionText>{dataItem.email}</CaptionText></LabelText>
              <LabelText>Telefone: <CaptionText>{dataItem.telefone}</CaptionText></LabelText>
              <LabelText>Código do Banco: <CaptionText>{dataItem.codigo_do_banco}</CaptionText></LabelText>
              <LabelText>Número da Agência: <CaptionText>{dataItem.numero_da_agencia}</CaptionText></LabelText>
              <LabelText>Tipo de Conta: <CaptionText>{dataItem.tipo_de_conta}</CaptionText></LabelText>
              <LabelText>Numero da Conta: <CaptionText>{dataItem.numero_da_conta}</CaptionText></LabelText>
            </ShowInformationsStudent>
          </ModalContent>
          {/* </TouchableWithoutFeedback> */}
        </ModalBackground>
      </Animated.View>
    </ModalContainer>
  );
};
export default ShowStudentInformationModal;
