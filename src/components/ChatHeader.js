import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import Avatar from './Avatar';
import ChatMenu from './ChatMenu';
import UserMenu from './UserMenu';

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
  appBarTitle: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText
  }
});

class ChatHeader extends Component {
  render() {
    const { classes, activeUser, activeChat, logout, leaveChat, deleteChat, editUser } = this.props;

    return (
      <AppBar color="primary" position="fixed" className={ classes.appBar }>
        <Toolbar color="contrast">
          { activeChat ? (
            <>
              <Avatar colorFrom={ activeChat._id }>
                { activeChat.title }
              </Avatar>
              <Typography variant="title" className={ classes.appBarTitle }>
                { activeChat.title }
                <ChatMenu
                  activeUser={ activeUser }
                  onLeaveClick={ () => leaveChat(activeChat._id) }
                  onDeleteClick={ () => deleteChat(activeChat._id) }
                />
              </Typography>
            </>
          ) : (
            <Typography variant="title" className={ classes.appBarTitle } noWrap>
              Telegram clone React
            </Typography>
          ) }
          {/*<UserMenu*/}
            {/*activeUser={ activeUser }*/}
            {/*onLogoutClick={ logout }*/}
            {/*onEditProfileClick={ editUser }*/}
          {/*/>*/}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(ChatHeader);
