import React, { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import NotificationModal from '../../components/Modals/NotificationModal';

const NewNaver: React.FC = () => {
  const [notification, setNotification] = useState(false);

  const baseUrl = 'https://navedex-api.herokuapp.com/v1/navers';

  const handleSubmit = async (body: object) => {
    try {
      await api(`${baseUrl}`, 'POST', body);
      setNotification(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Navbar />
      <Form title="Adicionar Naver" onSubmit={handleSubmit} />
      {notification && (
        <NotificationModal
          title="Naver criado"
          message="Naver criado com sucesso!"
        />
      )}
      <GlobalStyles />
    </Container>
  );
};

export default NewNaver;
