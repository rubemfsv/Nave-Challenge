import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NotificationModal from '../NotificationModal';

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

interface IProps {
  id: string;
  handleDeleteUser(id?: string | number): Promise<void>;
}

const DeleteOpenedModal: React.FC<IProps> = ({ id, handleDeleteUser }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(true);
  const [isModalDeleted, setIsModalDeleted] = useState(false);

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  const handleDeleteConfirmation = () => {
    handleDeleteUser(id);
    setIsModalDeleted(!isModalDeleted);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <>
      {isModalDeleted && (
        <NotificationModal
          title="Naver excluído"
          message="Naver excluído com sucesso!"
        />
      )}

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
