import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  ContainerList,
  LinkText,
  LinkButton,
  ActionContainerLeft,
  ActionContainerRight,
} from './styles';

import { Feather } from '@expo/vector-icons';

export default function ListItem({ data, selectedItem, deleteItem, changeItem }: {
  data: any; selectedItem?: any; deleteItem?: any; changeItem?: any;
}) {

  function LeftActions() {
    return (
      <ActionContainerLeft onPress={() => deleteItem(data.id)}>
        <Feather
          name="trash"
          color="#FFF"
          size={24}
        />
      </ActionContainerLeft>
    );
  }

  function RightActions() {
    return (
      <ActionContainerRight onPress={() => changeItem(data)}>
        <Feather
          name="edit"
          color="#FFF"
          size={24}
        />
      </ActionContainerRight>
    );
  }

  return (
    <Swipeable
      renderLeftActions={LeftActions}
      renderRightActions={RightActions}
    >
      <ContainerList>
        <LinkButton
          activeOpacity={1}
          onPress={() => selectedItem(data)}
        >
          <Feather
            name="user"
            color="#EDEBE8"
            size={24}
            style={{ marginLeft: '2%' }}
          />
          <LinkText numberOfLines={1}>{data.id}</LinkText>
          <LinkText numberOfLines={1} style={{ width: '70%' }} >{data.nome}</LinkText>
        </LinkButton>
      </ContainerList>
    </Swipeable>
  );
}