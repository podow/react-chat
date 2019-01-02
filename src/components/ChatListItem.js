import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import titleInitial from '../utils/title-initial';

const ChatListItem = ({chat}) => (
  <ListItem button >
    <Avatar>{titleInitial(chat)}</Avatar>
    <ListItemText primary={chat} />
  </ListItem>
);

export default ChatListItem;
