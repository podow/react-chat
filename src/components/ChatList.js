import React from 'react';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import ChatListItem from './ChatListItem';

const styles = () => ({
  chatList: {
    overflowY: 'auto',
    height: `calc(100% - 56px)`,
  },
  noChats: {
    textAlign: 'center'
  }
});

const ChatList = ({ classes, chats, activeChat }) => (
  <List className={classes.chatList} >
    { chats && chats.length ? (
      chats.map(chat => (
        <ChatListItem
          key={ chat._id }
          active={ activeChat && activeChat._id === chat._id }
          chatId={ chat._id }
          { ...chat }
        />
      )
    )) : (
      <Typography variant="subheading" className={ classes.noChats }>
        There is no chats yet ...
      </Typography>
    ) }
  </List>
);

export default withStyles(styles)(ChatList);
