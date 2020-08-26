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
import fetch from '../../../services/api';

const NaverOpenedModal: React.FC<NaverProps> = ({
  id,
  job_role,
  admission_date,
  birthdate,
  project,
  name,
  url,
}) => {
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [users, setUsers] = useState<NaverProps[]>([]);
  const [hasUser, setHasUser] = useState(false);

  const admissionYear = admission_date.substring(0, 4);
  const currentWorkingTime = 2020 - parseInt(admissionYear);

  const birthYear = birthdate.substring(0, 4);
  const currentAge = 2020 - parseInt(birthYear);

  const history = useHistory();

  function handleNaverModal() {
    setIsNaverModalOpen(!isNaverModalOpen);
  }

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
    handleNaverModal();
  }

  function handleEdit() {
    history.push(`/edit/${id}`);
    history.go(0);
  }

  return (
    <>
      {isDeleteModalOpen && (
        <DeleteOpenedModal
          id={id as string}
          handleDeleteUser={handleDeleteUser}
        />
      )}

      {isNaverModalOpen && (
        <Filter>
          <Container>
            <Image src={url} />
            <CardInfo>
              <Close onClick={() => handleNaverModal()} />
              <Name>{name}</Name>
              <Position>{job_role}</Position>
              <InfoTitle>Idade</InfoTitle>
              <InfoContent>{currentAge} anos</InfoContent>
              <InfoTitle>Tempo de Empresa</InfoTitle>
              <InfoContent>{currentWorkingTime} anos</InfoContent>
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
