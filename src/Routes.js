import React from "react";
import { Switch, Route } from "react-router-dom";
import PatientTable from "./containers/PatientTable";
import PatientForm from "./containers/PatientForm";
import AddVisitNew from "./components/addVistNew";
import Infor from "./components/infor";
import AddOld from "./components/addVisitOld";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={PatientForm} />
    <Route path="/info" component={PatientTable} />
    <Route path="/visit/info" component={Infor} />
    <Route path="/visit/addNew" component={AddVisitNew} />
    <Route path="/visit/addOld" component={AddOld} />
  </Switch>
);

export default Routes;
