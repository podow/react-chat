import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';

import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";

const styles = () => ({
  root: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
  }
});

class ChatPage extends Component {

  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats()
    ])
  }

  render() {
    const {
      classes, chats, messages, activeUser,
      logout, createChat, joinChat,
      leaveChat, deleteChat, sendMessage, editUser
    } = this.props;

    return (
      <div className={ classes.root }>
        <CssBaseline />
        <ChatHeader
          activeUser={ activeUser }
          activeChat={ chats.active }
          leaveChat={ leaveChat }
          deleteChat={ deleteChat }
          logout={ logout }
          editUser={ editUser }
        />
        <Sidebar
          chats={ chats }
          createChat={ createChat }
        />
        <Chat
          messages={ messages }
          activeChat={ chats.active }
          activeUser={ activeUser }
          sendMessage={ sendMessage }
          joinChat={ joinChat }
        />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
