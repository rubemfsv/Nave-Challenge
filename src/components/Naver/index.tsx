import React, { useState } from 'react';

import NaverOpenedModal from '../Modals/NaverOpenedModal';
import DeleteOpenedModal from '../Modals/DeleteOpenedModal';
import EditOpenedModal from '../Modals/EditOpenedModal';

import {
  Container,
  Card,
  ClickArea,
  Image,
  Name,
  Position,
  ButtonsContainer,
  DeleteIcon,
  EditIcon,
  StyledLink,
} from './styles';

export interface NaverProps {
  jobRole: string;
  admissionDate: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

const Naver: React.FC<NaverProps> = ({
  jobRole,
  admissionDate,
  birthdate,
  project,
  name,
  url,
}) => {
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function handleNaverModal() {
    setIsNaverModalOpen(!isNaverModalOpen);
    console.log('Abre');
    console.log(isNaverModalOpen);
  }

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
    console.log('Deleta');
    console.log(isDeleteModalOpen);
  }

  return (
    <>
      {isNaverModalOpen && (
        <NaverOpenedModal
          jobRole={jobRole}
          admissionDate={admissionDate}
          birthdate={birthdate}
          project={project}
          name={name}
          url={url}
        />
      )}
      {isDeleteModalOpen && <DeleteOpenedModal />}
      {isEditModalOpen && <EditOpenedModal />}

      <Container>
        <Card>
          <ClickArea onClick={() => handleNaverModal()}>
            <Image src={url} alt={name} />
            <Name>{name}</Name>
            <Position>{jobRole}</Position>
          </ClickArea>
          <ButtonsContainer>
            <DeleteIcon onClick={() => handleDeleteModal()} />
            <StyledLink to="/edit">
              <EditIcon />
            </StyledLink>
          </ButtonsContainer>
        </Card>
      </Container>
    </>
  );
};

export default Naver;
