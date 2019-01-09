import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu, { MenuItem } from '@material-ui/core/Menu';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
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

class UserMenu extends Component {
  state = {
    isModalOpen: false,
    anchorEl: null,
    username: '',
    firstName: '',
    lastName: '',
  };

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      username: nextProps.activeUser.username,
      firstName: nextProps.activeUser.firstName,
      lastName: nextProps.activeUser.lastName,
    });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null })
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogoutClick = () => {
    this.props.onLogoutClick();
    this.handleClose();
  };

  toggleEditProfileModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    this.handleClose();
  };

  handleSaveClick = () => {
    this.prop.onEditProfileClick({
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    })
  };

  render() {
    const { anchorEl, isModalOpen } = this.state;
    const { classes, disabled } = this.props;

    return (
      <>
        <IconButton
          color="inherit"
          aria-owns={ anchorEl ? 'simple-menu' : 'null' }
          aria-haspopup="true"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={ anchorEl }
          open={ Boolean(anchorEl) }
          onClose={ this.handleClose }
        >
          <MenuItem onClick={ this.toggleEditProfileModal }>Edit profile</MenuItem>
          <MenuItem onClick={ this.handleLogoutClick }>Logout</MenuItem>
        </Menu>
        <Modal
          open={ isModalOpen }
          className={ classes.modalWrapper }
          onClose={ this.toggleEditProfileModal }
        >
          <Paper className={ classes.modal }>
            <Typography variant="title" id="modal-title">
              Edit profile
            </Typography>
            <TextField
              required
              fullWidth
              name="username"
              label="Username"
              placeholder="Enter your username"
              type="text"
              margin="normal"
              value={ this.state.username }
              onChange={ this.handleInputChange }
            />
            <TextField
              required
              fullWidth
              name="firstName"
              label="First name"
              placeholder="Enter your first name"
              type="text"
              margin="normal"
              value={ this.state.firstName }
              onChange={ this.handleInputChange }
            />
            <TextField
              required
              fullWidth
              name="lastName"
              label="Last name"
              placeholder="Enter your last name"
              type="text"
              margin="normal"
              value={ this.state.lastName }
              onChange={ this.handleInputChange }
            />
            <Button color="primary" onClick={ this.handleSaveClick }>
              Save
            </Button>
            <Button onClick={ this.toggleEditProfileModal }>
              Close
            </Button>
          </Paper>
        </Modal>
      </>
    );
  }
}

export default withStyles(styles)(UserMenu);
