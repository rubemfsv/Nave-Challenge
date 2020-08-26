import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DeleteOpenedModal from '../DeleteOpenedModal';
import fetch from '../../../services/api';
import { NaverProps } from '../../../interfaces/index';

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
  const [navers, setNavers] = useState<NaverProps[]>([]);

  const admissionYear = admission_date.substring(0, 4);
  const currentWorkingTime = new Date().getFullYear() - parseInt(admissionYear);

  const birthYear = birthdate.substring(0, 4);
  const currentAge = new Date().getFullYear() - parseInt(birthYear);
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
          handleDeleteNaver={handleDeleteNaver}
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
