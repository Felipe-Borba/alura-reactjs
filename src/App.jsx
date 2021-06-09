import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Page404 from './paginas/Page404'
import NavBar from './components/NavBar'
import Post from './paginas/Post';
import Category from './paginas/Category';

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

        <Route path='/categoria/:id'>
          <Category />
        </Route>

        <Route path='/posts/:id'>
          <Post />
        </Route>

        <Route>
          <Page404 />
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
