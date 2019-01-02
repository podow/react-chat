import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import MessageInput from "./MessageInput";
import ChatList from "./ChatWrapper";

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

const Chat = ({classes, messages}) => (
  <main className={classes.chatLayout}>
    <ChatList messages={messages} />
    <MessageInput />
  </main>
);

export default withStyles(styles)(Chat);