import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Card, Header, BackIcon, Title } from './styles';

interface FormProps {
  title: string;
}

const Form: React.FC<FormProps> = ({ title }) => {
  const history = useHistory();

  return (
    <Container>
      <Card>
        <Header>
          <BackIcon
            onClick={() => {
              history.goBack();
            }}
          />
          <Title>{title}</Title>
        </Header>
      </Card>
    </Container>
  );
};

export default Form;
