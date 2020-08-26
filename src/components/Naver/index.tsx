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
  const [users, setUsers] = useState<NaverProps[]>([]);
  const [userToDelete, setUserToDelete] = useState();

  const [hasUser, setHasUser] = useState(false);

  const history = useHistory();

  const fetchUser = async () => {
    try {
      setHasUser(true);
      const response = await fetch(
        'https://navedex-api.herokuapp.com/v1/navers',
      );
      const data = await response.json();
      setHasUser(false);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  function handleNaverModal() {
    setIsNaverModalOpen(!isNaverModalOpen);
  }

  const handleDeleteUser = async (id: string | number) => {
    try {
      await fetch(
        `https://navedex-api.herokuapp.com/v1/navers/${id}`,
        'DELETE',
      );
      setUsers(await fetchUser());
    } catch (err) {
      console.error(err);
    }
  };

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
          handleDeleteUser={handleDeleteUser}
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
