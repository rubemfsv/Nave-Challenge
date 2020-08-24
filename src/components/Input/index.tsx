import React, { InputHTMLAttributes } from 'react';

import { Container, InputText } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
}

// eslint-disable-next-line react/prop-types
const Input: React.FC<InputProps> = ({ name, label, type, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} />
    </Container>
  );
};

export default Input;
