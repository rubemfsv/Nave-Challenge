import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Logo, LogoutButton } from './styles';

const Navbar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleLogout() {
    console.log('Logout');

    return null;
  }

  return (
    <Container>
      <Logo src={logo} />
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
    </Container>
  );
};

export default Navbar;
