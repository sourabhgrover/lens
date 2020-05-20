import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Chat from "./Chat/Chat";
import Home from "./Home";
import Table from "./Table/Table";
import Summary from "./Summary/Summary";

function App() {
  const session = useSelector((state) => state.session);
  const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        session.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <AuthenticatedRoute
          path="/table"
          render={(props) => <Table {...props} />}
        />
        <AuthenticatedRoute path="/chat" component={Chat} />
        <AuthenticatedRoute path="/summary" component={Summary} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
