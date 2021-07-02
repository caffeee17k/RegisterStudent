import styled from 'styled-components/native';

export const ModalContainer = styled.Modal`
  /* margin: 10px;
  background-color: red;
  padding: 30px; */
  /* background-color: gray; */
`;

export const ModalBackground = styled.View`
  flex: 1;
  margin-top: 0;
  margin-left: 0;
  margin-bottom: 0;
  margin-right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  height: 60%;
  width: 95%;
  /* justify-content: center; */
  /* align-items: center; */
  /* align-self: center; */
  background-color: white;
  margin: auto;
  border-radius: 40px;
  /* text-align: justify; */
  elevation: 4;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  padding: 30px;
  /* z-index: 900; */
`;

export const LabelText = styled.Text`
  margin-bottom: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -1.24px;
  color: #333333;
  text-align: left;
`;

export const CaptionText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.26px;
  color: #333333;
  text-align: justify;
`;

export const ModalTextButton = styled.Text`
  color: black;
  text-align: center;
  align-self: center;
  font-size: 17px;
  color: white;
  margin-top: 18px;
  font-weight: bold;
`;

export const ModalTextRedButton = styled.Text`
  color: black;
  text-align: center;
  align-self: center;
  font-size: 17px;
  color: red;
  margin-top: 18px;
  font-weight: bold;
`;

export const CancelModalButton = styled.TouchableHighlight`
  width: 300px;
  height: 60px;
  margin-top: 20px;
  text-align: center;
  border: 1px;
  border-color: red;
  border-radius: 25px;
  background-color: white;
`;

export const ConfirmModalButton = styled.TouchableHighlight`
  width: 300px;
  height: 60px;
  margin-top: 20px;
  border-radius: 25px;
  background-color: green;
`;

export const ContainerButton = styled.View`
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
`;

export const ModalTextBoldLarge = styled.Text`
  margin-bottom: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -1.24px;
  color: #333333;
  text-align: center;
`;

export const ShowInformationsStudent = styled.ScrollView`
  flex-grow: 1;
`;