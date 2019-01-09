import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import Button from "material-ui/es/Button/Button";

const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    padding: theme.spacing.unit,
    width: `calc(100% - ${320}px)`,
    backgroundColor: '#ffffff'
  }
});

class MessageInput extends Component {
  state = {
    value: ''
  };

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    })
  };

  handleKeyPress = event => {
    const { value } = this.state;

    if (event.key === 'Enter' && value) {
      this.props.sendMessage(value);
      this.setState({ value: '' });
    }
  };

  render() {
    const { classes, showJoinButton, onJoinButtonClick } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.messageInputWrapper}>
        { showJoinButton ? (
          <Button
            fullWidth
            variant="raised"
            color="primary"
            onClick={ onJoinButtonClick }
          >
            Join
          </Button>
        ) : (
          <TextField
            multiline
            fullWidth
            rowsMax="4"
            placeholder="Enter your message"
            margin="normal"
            value={ value }
            onChange={ this.handleValueChange }
            onKeyPress={ this.handleKeyPress }
          />
        ) }
      </div>
    );
  }
}

export default withStyles(styles)(MessageInput);
