import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

import { NaverProps } from '../../../interfaces/index';
import DeleteOpenedModal from '../DeleteOpenedModal';

const NaverOpenedModal: React.FC<NaverProps> = ({
  job_role,
  admission_date,
  birthdate,
  project,
  name,
  url,
}) => {
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const history = useHistory();

  function handleNaverModal() {
    setIsNaverModalOpen(!isNaverModalOpen);
  }

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
    handleNaverModal();
  }

  function handleEdit() {
    history.push('/edit');
    history.go(0);
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
              <Position>{job_role}</Position>
              <InfoTitle>Idade</InfoTitle>
              <InfoContent>{birthdate}</InfoContent>
              <InfoTitle>Tempo de Empresa</InfoTitle>
              <InfoContent>{admission_date}</InfoContent>
              <InfoTitle>Projetos que participou</InfoTitle>
              <InfoContent>{project}</InfoContent>
              <ButtonsContainer>
                <DeleteIcon onClick={() => handleDeleteModal()} />
                <EditIcon onClick={() => handleEdit()} />
              </ButtonsContainer>
            </CardInfo>
          </Container>
        </Filter>
      )}
    </>
  );
};

export default NaverOpenedModal;
