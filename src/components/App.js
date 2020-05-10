import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Chat from "./Chat/Chat";
import Home from "./Home";
import Table from "./Table/Table";
import Summary from "./Summary/Summary";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/table" render={(props) => <Table {...props} />}></Route>
        <Route path="/chat" component={Chat}></Route>
        <Route path="/summary" component={Summary}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
