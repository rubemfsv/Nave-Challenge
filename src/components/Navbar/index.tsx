import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Logo, LogoutButton } from './styles';
import { useAuth } from '../../contexts/auth';

const Navbar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const { handleAuth } = useAuth();

  return (
    <Container>
      <Logo src={logo} />
      <LogoutButton onClick={() => handleAuth(false)}>Sair</LogoutButton>
    </Container>
  );
};

export default Navbar;
