import React from 'react';

import ButtonNaver from '../Buttons/ButtonNaver';

import { Container, Title, StyledLink } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Navers</Title>
      <StyledLink to="/new">
        <ButtonNaver title="Adicionar Naver" />
      </StyledLink>
    </Container>
  );
};

export default Header;
