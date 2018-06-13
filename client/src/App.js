import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => (
  <Fragment>
    <Route exact path="/" component={Home} />

    <Route component={NoMatch} />
  </Fragment>
);

export default App;
