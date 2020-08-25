import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { setToken } from '../../services/auth';
import { useAuth } from '../../contexts/auth';

import GlobalStyles from '../../styles/GlobalStyles';
import logoImg from '../../assets/logo.png';

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Logo,
  InputContainer,
  ButtonContainer,
  ButtonForm,
} from './styles';

const Login: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const { handleAuth } = useAuth();

  const baseUrl = 'https://navedex-api.herokuapp.com/v1';
  const history = useHistory();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();
      setLoginInfo(() => ({
        ...loginInfo,
        [event.target.name]: event.target.value,
      }));
    },
    [loginInfo],
  );

  async function handleLogin() {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });

    if (response.status === 200) {
      const { token } = await response.json();
      setToken(token);
      handleAuth(true);
      history.push('/');
      history.go(0);
    } else {
      console.log('Erro');
    }
  }

  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <Logo src={logoImg} />
          </CardHeader>
          <CardBody>
            <InputContainer>
              <label htmlFor="email">E-mail</label>
              <input
                name="email"
                type="text"
                id="email"
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Senha</label>
              <input
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </InputContainer>
            <ButtonContainer>
              <ButtonForm type="submit" onClick={handleLogin}>
                Entrar
              </ButtonForm>
            </ButtonContainer>
          </CardBody>
        </Card>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default Login;
