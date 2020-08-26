import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NaverOpenedModal from '../Modals/NaverOpenedModal';
import DeleteOpenedModal from '../Modals/DeleteOpenedModal';

import { NaverProps } from '../../interfaces/index';
import fetch from '../../services/api';

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
  id,
  job_role,
  admission_date,
  birthdate,
  project,
  name,
  url,
}) => {
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [navers, setNavers] = useState<NaverProps[]>([]);

  const baseUrl = 'https://navedex-api.herokuapp.com/v1/navers';
  const history = useHistory();

  const fetchNaver = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();

      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteNaver = async (id: string | number) => {
    try {
      await fetch(`${baseUrl}/${id}`, 'DELETE');
      setNavers(await fetchNaver());
    } catch (err) {
      console.error(err);
    }
  };

  function handleNaverModal() {
    setIsNaverModalOpen(!isNaverModalOpen);
  }

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  function handleEdit() {
    history.push(`/edit/${id}`);
    history.go(0);
  }

  return (
    <>
      {isNaverModalOpen && (
        <NaverOpenedModal
          id={id}
          job_role={job_role}
          admission_date={admission_date}
          birthdate={birthdate}
          project={project}
          name={name}
          url={url}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteOpenedModal
          id={id as string}
          handleDeleteNaver={handleDeleteNaver}
        />
      )}

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
