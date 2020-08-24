import React, { useState } from 'react';

import {
  Container,
  Image,
  CardInfo,
  Name,
  Position,
  InfoTitle,
  InfoContent,
  Close,
  ButtonsContainer,
  DeleteIcon,
  EditIcon,
  Filter,
} from './styles';

import { NaverProps } from '../../Naver';
import DeleteOpenedModal from '../DeleteOpenedModal';

const NaverOpenedModal: React.FC<NaverProps> = ({
  jobRole,
  admissionDate,
  birthdate,
  project,
  name,
  url,
  children,
}) => {
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function handleNaverModal() {
    setIsNaverModalOpen(!isNaverModalOpen);
  }

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
    handleNaverModal();
  }

  function handleEditModal() {
    setIsEditModalOpen(!isEditModalOpen);
    console.log('Edita');
    console.log(isEditModalOpen);
  }

  return (
    <>
      {isDeleteModalOpen && <DeleteOpenedModal />}

      {isNaverModalOpen && (
        <Filter>
          <Container>
            <Image src={url} />
            <CardInfo>
              <Close onClick={() => handleNaverModal()} />
              <Name>{name}</Name>
              <Position>{jobRole}</Position>
              <InfoTitle>Idade</InfoTitle>
              <InfoContent>{birthdate}</InfoContent>
              <InfoTitle>Tempo de Empresa</InfoTitle>
              <InfoContent>{admissionDate}</InfoContent>
              <InfoTitle>Projetos que participou</InfoTitle>
              <InfoContent>{project}</InfoContent>
              <ButtonsContainer>
                <DeleteIcon onClick={() => handleDeleteModal()} />
                <EditIcon onClick={() => handleEditModal()} />
              </ButtonsContainer>
            </CardInfo>
          </Container>
        </Filter>
      )}
    </>
  );
};

export default NaverOpenedModal;
