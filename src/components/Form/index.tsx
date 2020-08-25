import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FormProps } from '../../interfaces/index';

import {
  Container,
  Card,
  Header,
  BackIcon,
  Title,
  Body,
  Row,
  InputContainer,
  ButtonContainer,
  ButtonForm,
} from './styles';

type EventType = React.ChangeEvent<HTMLInputElement>;

const initialState = {
  job_role: '',
  admission_date: '',
  birthdate: '',
  project: '',
  name: '',
  url: '',
};

const Form: React.FC<FormProps> = ({ title, naverData, onSubmit }) => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [hasErr, setHasErr] = useState(false);

  const history = useHistory();

  function handleBack() {
    history.push('/');
    history.go(0);
  }

  function handleChange(event: EventType) {
    event.persist();
    setUserInfo(() => ({
      ...userInfo,
      [event.target.name]: event.target.value,
    }));
  }

  function handleCheckFields() {
    console.log(userInfo);
    for (const val in userInfo) {
      if (!(userInfo as any)[val].length) {
        return false;
      }
    }
    return true;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const check = handleCheckFields();
    if (check) {
      console.log(userInfo);
      onSubmit(userInfo);
    } else {
      setHasErr(true);
    }
  }

  return (
    <Container>
      <Card>
        <Header>
          <BackIcon onClick={() => handleBack()} />
          <Title>{title}</Title>
        </Header>
        <Body onSubmit={handleSubmit}>
          <Row>
            <InputContainer>
              <label htmlFor="name">Nome</label>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Nome"
                defaultValue={naverData?.name}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="job_role">Cargo</label>
              <input
                name="job_role"
                type="text"
                id="job_role"
                placeholder="Cargo"
                defaultValue={naverData?.job_role}
                onChange={handleChange}
              />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer>
              <label htmlFor="birthdate">Idade</label>
              <input
                name="birthdate"
                type="text"
                id="birthdate"
                placeholder="Idade"
                defaultValue={naverData?.birthdate}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="admission_date">Tempo de empresa</label>
              <input
                name="admission_date"
                type="text"
                id="admission_date"
                placeholder="Tempo de empresa"
                defaultValue={naverData?.admission_date}
                onChange={handleChange}
              />
            </InputContainer>
          </Row>
          <Row>
            <InputContainer>
              <label htmlFor="project">Projetos que participou</label>
              <input
                name="project"
                type="text"
                id="project"
                placeholder="Projetos que participou"
                defaultValue={naverData?.project}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="url">URL da foto do Naver</label>
              <input
                name="url"
                type="text"
                id="url"
                placeholder="URL da foto do Naver"
                defaultValue={naverData?.url}
                onChange={handleChange}
              />
            </InputContainer>
          </Row>
          <ButtonContainer>
            <ButtonForm type="submit">Salvar</ButtonForm>
          </ButtonContainer>
        </Body>
      </Card>
    </Container>
  );
};

export default Form;
