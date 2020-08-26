import React, { useEffect, useState, useMemo } from 'react';

import Naver from '../Naver';

import fetch from '../../services/api';
import { NaverProps } from '../../interfaces/index';

import { Container } from './styles';

const NaverList: React.FC = () => {
  const [navers, setNavers] = useState<NaverProps[]>([]);
  const [hasNaver, setHasNaver] = useState(false);

  const baseUrl = 'https://navedex-api.herokuapp.com/v1/navers';

  const fetchNavers = async () => {
    try {
      setHasNaver(true);
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      setHasNaver(false);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      setNavers(await fetchNavers());
    })();
  }, []);

  return (
    <Container>
      {!hasNaver ? (
        <>
          {navers?.map((user) => (
            <Naver
              key={user.id}
              id={user.id}
              job_role={user.job_role}
              admission_date={user.admission_date}
              birthdate={user.birthdate}
              project={user.project}
              name={user.name}
              url={user.url}
            />
          ))}
        </>
      ) : (
        <div />
      )}
    </Container>
  );
};

export default NaverList;
