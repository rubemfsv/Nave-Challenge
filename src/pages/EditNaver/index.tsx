import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import NotificationModal from '../../components/Modals/NotificationModal';

import fetch from '../../services/api';
import { NaverProps } from '../../interfaces/index';

import { Container } from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

const EditNavers: React.FC = () => {
  const [naverData, setNaverData] = useState({} as NaverProps);
  const [notification, setNotification] = useState(false);

  const { id } = useParams();

  const baseUrl = 'https://navedex-api.herokuapp.com/v1/navers';

  useEffect(() => {
    (async () => {
      const response = await fetch(`${baseUrl}/${id}`);
      setNaverData((await response.json()) as NaverProps);
    })();
  }, [id]);

  const handleSubmit = async (body: any) => {
    try {
      await fetch(`${baseUrl}/${id}`, 'PUT', body);
      setNotification(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Navbar />
      <Form
        title="Editar Naver"
        onSubmit={handleSubmit}
        naverData={naverData}
      />
      {notification && (
        <NotificationModal
          title="Naver atualizado"
          message="Naver atualizado com sucesso!"
        />
      )}
      <GlobalStyles />
    </Container>
  );
};

export default EditNavers;
