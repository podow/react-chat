import React, { Component } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { withStyles } from '@material-ui/core/styles';
import Modal from "material-ui/es/Modal/Modal";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "material-ui/es/Button/Button";

const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3
  }
});

class NewChatButton extends Component {
  state = {
    open: false,
    title: {
      value: '',
      isValid: true
    }
  };

  toggleModal = () => {
    this.setState({
      open: !this.state.open
    })
  };

  handleTitleChange = event => {
    this.setState({
      title: {
        value: event.target.value,
        isValid: true
      }
    })
  };

  handleCreateClick = event => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.value) {
      this.setState({
        title: {
          value: title.value,
          isValid: false
        }
      });

      return false;
    }

    this.props.onClick(title.value);
    this.toggleModal();
    this.setState({
      title: {
        value: '',
        isValid: true
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { open, title } = this.state;

    return (
      <>
        <Fab
          color="primary"
          aria-label="Add"
          className={ classes.newChatButton }
        >
          <AddIcon />
        </Fab>
        <Modal
          open={ open }
          className={ classes.modalWrapper }
          onClose={ this.toggleModal }
        >
          <Paper className={ classes.modal }>
            <Typography variant="title" id="modal-title">
              Create new chat
            </Typography>
            <TextField
              required
              fullWidth
              label="New chat"
              placeholder="Type the title..."
              type="text"
              margin="normal"
              autoComplete="new-chat"
              value={ title.value }
              onChange={ this.handleTitleChange }
              error={ !title.isValid }
            />
            <Button
              color="primary"
              onClick={ this.handleCreateClick }
            >
              Create
            </Button>
          </Paper>
        </Modal>
      </>
    );
  }
}

export default withStyles(styles)(NewChatButton);
