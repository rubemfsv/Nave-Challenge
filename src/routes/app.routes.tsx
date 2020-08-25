import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewNaver from '../pages/NewNaver';
import EditNaver from '../pages/EditNaver';

const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/new" component={NewNaver} exact />
      <Route path="/edit/:id" component={EditNaver} exact />
    </Switch>
  );
};

export default AppRoute;
