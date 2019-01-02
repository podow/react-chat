import React from 'react';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/es/Paper/Paper';

import { withStyles } from '@material-ui/core/styles';

import classnames from 'classnames';
import titleInitial from "../utils/title-initial";

const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px `
  },
  messageWrapperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff',
  }
});

const Message = ({ classes, sender, content }) => {
  const isMessageFromMe = sender === 'me';
  const userAvatar = (
    <Avatar>
      { titleInitial(sender) }
    </Avatar>
  );

  return (
    <div
      className={classnames(
        classes.messageWrapper,
        isMessageFromMe && classes.messageWrapperFromMe
      )}
    >
      {!isMessageFromMe && userAvatar}
      <Paper
        className={classnames(
          classes.message,
          isMessageFromMe && classes.messageFromMe
        )}
      >
        <Typography variant='caption'>
          { sender }
        </Typography>
        <Typography variant='body1'>
          { content }
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(Message);
