import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import fetch from "isomorphic-fetch";

const styles = theme => ({
  submitButton: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignUpForm extends Component {
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    },
    repeatPassword: {
      value: '',
      isValid: true
    }
  };

  handleInputChange = event => {
    event.persist();
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value
      }
    }));
  };

  validate = () => {
    const { password, repeatPassword } = this.state;
    const isValid = password === repeatPassword;

    this.setState({
      password: { ...password, isValid },
      repeatPassword: { ...repeatPassword, isValid },
    });

    return isValid;
  };

  handleSubmit = async event => {
    event.preventDefault();

    if (!this.validate()) {
      return;
    }

    const { username, password } = this.state;

    console.log(`Username: ${username.value}`, `Password: ${password.value}`);

    const res = await fetch(`http://localhost:8000/v1/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .catch(reason => console.warn(reason));

    console.log(res);
  };

  render() {
    const { classes } = this.props;
    const { username, password, repeatPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          name="username"
          placeholder="Type your username"
          type="text"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          name="password"
          placeholder="Type your password"
          type="password"
          margin="normal"
          autoComplete="new-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <TextField
          required
          fullWidth
          label="Repeat password"
          name="repeatPassword"
          placeholder="Repeat your password"
          type="password"
          margin="normal"
          autoComplete="new-password"
          value={repeatPassword.value}
          onChange={this.handleInputChange}
          error={!repeatPassword.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.submitButton}
        >
          Sign In
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(SignUpForm);
