import React, { Component } from "react";
import {
  Input,
  Card,
  Typography,
  InputLabel,
  Button,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: "",
        error: false
      },
      password: {
        value: "",
        error: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    console.log(this.state);
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
            Sign in
          </Typography>
          <TextField
            style={{ margin: 5 }}
            fullWidth
            label="Username"
            name="username"
            value={this.state.username.value}
            onChange={this.handleChange}
            required
            type="text"
            InputLabelProps={{ shrink: true }}
            error={this.state.username.error}
          />
          <TextField
            style={{ margin: 5 }}
            fullWidth
            label="Password"
            name="password"
            value={this.state.password.value}
            onChange={this.handleChange}
            required
            //onBlur={this.checkValid}
            InputLabelProps={{ shrink: true }}
            type="password"
            error={this.state.password.error}
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
