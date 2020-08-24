import React from 'react';

import { useAuth } from '../contexts/auth';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes: React.FC = () => {
  const { loged } = useAuth();

  return loged ? <Home /> : <Home />;
};

export default Routes;
