import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NaverOpenedModal from '../Modals/NaverOpenedModal';
import DeleteOpenedModal from '../Modals/DeleteOpenedModal';

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

  const history = useHistory();

  function handleNaverModal() {
    setIsNaverModalOpen(!isNaverModalOpen);
  }

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  function handleEdit() {
    history.push('/edit');
    history.go(0);
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

      <Container>
        <Card>
          <ClickArea onClick={() => handleNaverModal()}>
            <Image src={url} alt={name} />
            <Name>{name}</Name>
            <Position>{jobRole}</Position>
          </ClickArea>
          <ButtonsContainer>
            <DeleteIcon onClick={() => handleDeleteModal()} />
            <EditIcon onClick={() => handleEdit()} />
          </ButtonsContainer>
        </Card>
      </Container>
    </>
  );
};

export default Naver;
