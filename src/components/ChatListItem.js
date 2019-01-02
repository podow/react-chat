import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Avatar from './Avatar';

const ChatListItem = ({chat}) => (
  <ListItem button >
    <Avatar colorFrom={chat}>{chat}</Avatar>
    <ListItemText primary={chat} />
  </ListItem>
);

export default ChatListItem;
