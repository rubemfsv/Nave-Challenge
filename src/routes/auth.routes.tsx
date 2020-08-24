import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

const AuthRoute: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AuthRoute;
