import React from 'react';

import ButtonNaver from '../Buttons/ButtonNaver';

import { Container, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Navers</Title>
      <ButtonNaver title="Adicionar Naver" />
    </Container>
  );
};

export default Header;
