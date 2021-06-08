import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Page404 from './paginas/Page404'
import NavBar from './components/NavBar'

function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
