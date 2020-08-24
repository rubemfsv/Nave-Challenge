import React from 'react';

import Naver from '../Naver';

import { Container } from './styles';

const NaverList: React.FC = () => {
  return (
    <Container>
      <Naver
        jobRole="Front End Engineer 1"
        admissionDate="01/09/2020"
        birthdate="15/06/1996"
        project="Project Frontend Test"
        name="Rubem Ferreira 1"
        url="https://github.com/rubemfsv.png"
      />
      <Naver
        jobRole="Front End Engineer 2"
        admissionDate="01/09/2020"
        birthdate="15/06/1996"
        project="Project Frontend Test"
        name="Rubem Ferreira 2"
        url="https://github.com/rubemfsv.png"
      />
      <Naver
        jobRole="Front End Engineer 3"
        admissionDate="01/09/2020"
        birthdate="15/06/1996"
        project="Project Frontend Test"
        name="Rubem Ferreira 3"
        url="https://github.com/rubemfsv.png"
      />
      <Naver
        jobRole="Front End Engineer 4"
        admissionDate="01/09/2020"
        birthdate="15/06/1996"
        project="Project Frontend Test"
        name="Rubem Ferreira 4"
        url="https://github.com/rubemfsv.png"
      />
    </Container>
  );
};

export default NaverList;
