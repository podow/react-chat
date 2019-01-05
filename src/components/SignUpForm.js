import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

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
    const isValid = password.value === repeatPassword.value;

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

    this.props.onSubmit(username.value, password.value);
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
