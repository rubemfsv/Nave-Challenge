import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewNaver from '../pages/NewNaver';
import EditNaver from '../pages/EditNaver';

const AppRoute: React.FC = () => {
  const Pagina404 = () => <div>Página 404</div>;

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={NewNaver} />
      <Route exact path="/edit/:id" component={EditNaver} />
      <Route component={Pagina404} />
    </Switch>
  );
};

export default AppRoute;
