import React, {useState, useEffect} from 'react';
import {useRoutes} from 'hookrouter';
import './App.scss';
import {NavBar} from "./Components/NavBar/NavBar";
import {Teams} from "./Components/Teams/Teams";
import {Home} from "./Components/Home/Home";
import {Players} from "./Components/Players/Players";

const routes = {
    '/': () => <Home />,
    '/teams': () => <Teams />,
    '/players': () => <Players />,
  };

const App = () => {

  useEffect(() => {
    document.title = 'NHL Stats'
  }, []);

  const match = useRoutes(routes);
  return (
    <div className="App">
      <NavBar />
      {match || <div><h2>404 Error: Page not found</h2></div>}
    </div>
  );
};

export {App};
