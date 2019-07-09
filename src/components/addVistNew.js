import React, { Component } from "react";
import { Card, Typography, Button, TextField } from "@material-ui/core";

export default class CommonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: {
        value: this.props.id
          ? this.props.id
          : Math.floor(Math.random() * 1000000),
        error: false
      },
      lastname: {
        value: "",
        error: false
      },
      mobile: {
        value: "",
        error: false
      },
      date: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkValid = this.checkValid.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    if (name === "lastname" || name === "firstname" || name === "mobile") {
      let newState = { ...this.state[name] };
      newState.value = value;
      console.log(newState);
      this.setState({ [name]: newState });
    } else this.setState({ [name]: value });
  }

  handleClick() {
    console.log(this.state);
  }

  checkValid(event) {
    const { type, value, name } = event.target;
    let newState = { ...this.state[name] };
    if (type === "text" && name !== "mobile") {
      if (/[0-9]/.exec(value) !== null) {
        newState.error = true;
      } else newState.error = false;
    }
    if (name === "mobile") {
      if (/^\d{10,11}$/.exec(value) !== null) {
        newState.error = false;
      } else newState.error = true;
    }
    this.setState({ [name]: newState });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: "auto",
          margin: 30,
          justifyContent: "center"
        }}
      >
        <Card
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: 30,
            width: 700,
            flexDirection: "column"
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.purpose}
          </Typography>
          <TextField
            style={{ margin: 5 }}
            fullWidth
            label="ID"
            name="firstname"
            value={this.state.ID.value}
            onChange={this.handleChange}
            required
            onBlur={this.checkValid}
            type="text"
            error={this.state.ID.error}
          />
          <TextField
            style={{ margin: 5 }}
            fullWidth
            label="Precription"
            name="lastname"
            value={this.state.lastname.value}
            onChange={this.handleChange}
            required
            onBlur={this.checkValid}
            type="text"
            error={this.state.lastname.error}
          />

          <TextField
            style={{ margin: 5 }}
            fullWidth
            label="Date"
            name="date"
            value={this.state.dob}
            onChange={this.handleChange}
            required
            type="date"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            style={{ width: 200, alignSelf: "center" }}
            onClick={() => this.handleClick()}
          >
            Save
          </Button>
        </Card>
      </div>
    );
  }
}
