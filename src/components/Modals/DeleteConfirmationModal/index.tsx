import React, { useState } from 'react';

import { Container, Filter, Header, Title, Warning, Close } from './styles';

const DeleteConfirmationModal: React.FC = () => {
  const [isModalDeleted, setIsModalDeleted] = useState(true);

  function handleDeleteConfirmation() {
    setIsModalDeleted(!isModalDeleted);
    console.log('Dele');
  }

  return (
    <>
      {isModalDeleted && (
        <Filter>
          <Container>
            <Header>
              <Title>Naver excluído</Title>
              <Close onClick={() => handleDeleteConfirmation()} />
            </Header>
            <Warning>Naver excluído com sucesso!</Warning>
          </Container>
        </Filter>
      )}
    </>
  );
};

export default DeleteConfirmationModal;
