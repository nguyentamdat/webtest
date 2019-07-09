import React from "react";
import { Switch, Route } from "react-router-dom";
import PatientTable from "./containers/PatientTable";
import PatientForm from "./containers/PatientForm";
import AddVisitNew from "./components/addVistNew";
import Infor from "./components/infor";
import AddOld from "./components/addVisitOld";
import Signin from "./containers/Signin";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Signin} />
    <Route path="/patient/add" component={PatientForm} />
    <Route path="/patient/info" component={PatientTable} />
    <Route path="/visit/info" component={Infor} />
    <Route path="/visit/addNew" component={AddVisitNew} />
    <Route path="/visit/addOld" component={AddOld} />
  </Switch>
);

export default Routes;
