import React, { Component } from "react";
import { Input } from "@material-ui/core";

export default class PatientForm extends Component {
  render() {
    return (
      <div style={{ flex: "auto" }}>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </div>
    );
  }
}
