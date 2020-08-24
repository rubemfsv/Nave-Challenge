import React from 'react';

import { Container } from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';

const EditNaver: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Form title="Editar Naver" />
      <GlobalStyles />
    </Container>
  );
};

export default EditNaver;
