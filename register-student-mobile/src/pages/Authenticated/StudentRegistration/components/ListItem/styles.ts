import styled from 'styled-components/native';

export const ContainerList = styled.View`
  width: 90%;
  align-self: center;
  background-color: gray;
  margin: 7px 10px;
  padding: 12px;
  border-radius: 10px;
`;

export const LinkButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const LinkText = styled.Text`
  color: #EDEBE8;
  padding-left: 15px;
  padding-right: 1px;
  font-size: 18px;
`;

export const ActionContainerLeft = styled.TouchableOpacity`
  width: 13%;
  background-color: #990000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 7px 10px;
`;

export const ActionContainerRight = styled.TouchableOpacity`
  width: 13%;
  background-color: green;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 7px 10px;
`;