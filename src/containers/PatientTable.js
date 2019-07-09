import React, { Component } from "react";
import TablePaging from "../components/TablePaging";

export default class PatientForm extends Component {
  render() {
    return (
      <div style={{ flex: "auto" }}>
        <TablePaging />
      </div>
    );
  }
}
