import React, { Component } from "react";
import {
  Card,
  Typography,
  InputLabel,
  Button,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";

export default class PatientForm extends Component {
  constructor(props) {
    super(props);
    if (props) console.log(props);
    this.state = {
      firstname: {
        value: "",
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
      gender: "",
      dob: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkValid = this.checkValid.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    if (name === "lastname" || name === "firstname" || name === "mobile") {
      let newState = { ...this.state[name] };
      newState.value = value;
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
            Add Patient
          </Typography>
          <TextField
            style={{ margin: 5 }}
            fullWidth
            label="First name"
            name="firstname"
            value={this.state.firstname.value}
            onChange={this.handleChange}
            required
            onBlur={this.checkValid}
            type="text"
            error={this.state.firstname.error}
          />
          <TextField
            style={{ margin: 5 }}
            fullWidth
            label="Last name"
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
            label="Mobile"
            name="mobile"
            value={this.state.mobile.value}
            onChange={this.handleChange}
            required
            onBlur={this.checkValid}
            error={this.state.mobile.error}
          />
          <InputLabel style={{ alignSelf: "start", margin: 5 }}>
            Gender
          </InputLabel>
          <Select
            value={this.state.gender}
            onChange={this.handleChange}
            inputProps={{
              name: "gender",
              id: "gender"
            }}
            style={{ width: 700, margin: 5 }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          <TextField
            style={{ margin: 5 }}
            fullWidth
            label="Date of Birth"
            name="dob"
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
