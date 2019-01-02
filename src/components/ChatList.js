import React from 'react';

import List from '@material-ui/core/List';

import { withStyles } from '@material-ui/core/styles';

import ChatListItem from './ChatListItem';

const styles = () => ({
  chatList: {
    overflowY: 'auto',
    height: `calc(100% - 56px)`,
  },
});

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatList} >
    {chats && chats.map((chat, index) => (
      <ChatListItem key={index} chat={chat} />
    ))}
  </List>
);

export default withStyles(styles)(ChatList);
