import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewNaver from '../pages/NewNaver';
import EditNaver from '../pages/EditNaver';

const AppRoute: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/new" component={NewNaver} />
          <Route path="/edit" component={EditNaver} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
