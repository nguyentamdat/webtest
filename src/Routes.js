import React from "react";
import { Switch, Route } from "react-router-dom";
import PatientTable from "./containers/PatientTable";
import PatientForm from "./containers/PatientForm";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PatientForm} />
    <Route path="/info" component={PatientTable} />
  </Switch>
);

export default Routes;
