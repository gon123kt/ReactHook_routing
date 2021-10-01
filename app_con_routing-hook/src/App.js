import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './componentes/about';
import CharacterDetail from './componentes/CharacterDetail';
import Error404 from './componentes/Error404';
import Home from './componentes/Home';
import NavBar from './componentes/NavBar';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/detalles">
            <CharacterDetail />
        </Route>
        <Route path="/detalles/:id">
            <CharacterDetail />
        </Route>
        <Route path="/about">
           <About />
        </Route>
        <Route>
           <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
    
  );
}

export default App;
