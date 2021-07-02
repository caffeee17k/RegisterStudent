import React from 'react';
import { View } from 'react-native';
import { Container, TextSair } from './styles';

const BackButton = ({
  onPress,
  Icon,
}: {
  onPress: any;
  Icon?: () => JSX.Element;
}) => {
  return (
    <Container onPress={onPress}>
      <View style={{ justifyContent: 'center' }}>{Icon && Icon()}</View>
      <TextSair>Voltar</TextSair>
    </Container>
  );
};

export default BackButton;
