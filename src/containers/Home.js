import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Routes from "../Routes";

export default class Home extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes />
      </div>
    );
  }
}
