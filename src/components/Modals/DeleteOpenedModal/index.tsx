import React, { useState } from 'react';

import DeleteConfirmationModal from '../DeleteConfirmationModal';

import {
  Container,
  Filter,
  Header,
  Warning,
  Title,
  ButtonsContainer,
  CancelButton,
  DeleteButton,
} from './styles';

const DeleteOpenedModal: React.FC = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(true);
  const [isModalDeleted, setIsModalDeleted] = useState(false);

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  function handleDeleteConfirmation() {
    setIsModalDeleted(!isModalDeleted);
    handleDeleteModal();
  }

  return (
    <>
      {isModalDeleted && <DeleteConfirmationModal />}

      {isDeleteModalOpen && (
        <Filter>
          <Container>
            <Header>
              <Title>Excluir Naver</Title>
            </Header>
            <Warning>Tem certeza que deseja excluir este Naver?</Warning>
            <ButtonsContainer>
              <CancelButton onClick={() => handleDeleteModal()}>
                Cancelar
              </CancelButton>
              <DeleteButton onClick={() => handleDeleteConfirmation()}>
                Excluir
              </DeleteButton>
            </ButtonsContainer>
          </Container>
        </Filter>
      )}
    </>
  );
};

export default DeleteOpenedModal;
