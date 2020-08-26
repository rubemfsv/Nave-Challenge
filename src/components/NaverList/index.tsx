import React, { useEffect, useState, useMemo } from 'react';

import Naver from '../Naver';

import { Container } from './styles';

import fetch from '../../services/api';

import { NaverProps } from '../../interfaces/index';

const NaverList: React.FC = () => {
  const [users, setUsers] = useState<NaverProps[]>([]);
  const [hasUser, setHasUser] = useState(false);

  const fetchUser = async () => {
    try {
      setHasUser(true);
      const response = await fetch(
        'https://navedex-api.herokuapp.com/v1/navers',
      );
      const data = await response.json();
      setHasUser(false);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      setUsers(await fetchUser());
    })();
  }, []);

  return (
    <Container>
      {!hasUser ? (
        <>
          {users?.map((user) => (
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
