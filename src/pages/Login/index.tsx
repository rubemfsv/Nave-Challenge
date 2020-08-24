import React from 'react';

import GlobalStyles from '../../styles/GlobalStyles';
import { Container, Card, CardHeader, Logo, CardBody } from './styles';

import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import ButtonSubmit from '../../components/Buttons/ButtonSubmit';

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <Logo src={logo} />
          </CardHeader>
          <CardBody>
            <Input name="email" label="E-mail" type="text" />
            <Input name="password" label="Senha" type="password" />
            <ButtonSubmit title="Entrar" />
          </CardBody>
        </Card>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default Login;
