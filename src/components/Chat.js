import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import MessageInput from './MessageInput';
import ChatWrapper from './ChatWrapper';

const styles = () => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
});

const Chat = ({ classes, messages, activeChat, activeUser, joinChat, sendMessage }) => (
  <main className={classes.chatLayout}>
    <ChatWrapper
      messages={ messages }
      activeUser={ activeUser }
    />
    <MessageInput
      sendMessage={ content => sendMessage(activeChat._id, content) }
      onJoinButtonClick={ joinChat }
      activeUser={ activeUser }
    />
  </main>
);

export default withStyles(styles)(Chat);
