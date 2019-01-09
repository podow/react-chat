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

const messages = [
  {
    sender: 'me',
    content: 'Hello',
  },
  {
    sender: 'John Doe',
    content: 'World!',
  },
];

class ChatPage extends Component {

  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats()
    ])
  }

  render() {
    const { classes, chats } = this.props;

    return (
      <div className={ classes.root }>
        <CssBaseline />
        <ChatHeader />
        <Sidebar chats={ chats } />
        <Chat messages={ messages } />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
