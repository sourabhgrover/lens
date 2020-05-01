import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Chat from "./Chat/Chat";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/chat" component={Chat}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
