import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NaverOpenedModal from '../Modals/NaverOpenedModal';
import DeleteOpenedModal from '../Modals/DeleteOpenedModal';

import { NaverProps } from '../../interfaces/index';

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

const Naver: React.FC<NaverProps> = ({
  job_role,
  admission_date,
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
          job_role={job_role}
          admission_date={admission_date}
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
            <Position>{job_role}</Position>
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
