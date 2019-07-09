import React, { Component } from "react";
import PatientTablePaging from "../components/PatientTablePaging";

export default class PatientTable extends Component {
  render() {
    return (
      <div style={{ flex: "auto" }}>
        <PatientTablePaging />
      </div>
    );
  }
}
