import React from 'react';

import { Container, ButtonForm } from './styles';

interface ButtonProps {
  title: string;
}

const ButtonNaver: React.FC<ButtonProps> = ({ title }) => {
  return (
    <Container>
      <ButtonForm>{title}</ButtonForm>
    </Container>
  );
};

export default ButtonNaver;
