import React from "react";
import Layout from "./components/hoc/layout";
import Home from "./components/Home";
import RegisterLogin from "./components/Register_login";
import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/register_login"} component={RegisterLogin} />
    </Switch>
  </Layout>
);
export default Routes;
