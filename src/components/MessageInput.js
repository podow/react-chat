import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

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
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.messageInputWrapper}>
        <TextField
          multiline
          fullWidth
          rowsMax="4"
          placeholder="Enter your message"
          margin="normal"
        />
      </div>
    );
  }
}

export default withStyles(styles)(MessageInput);
