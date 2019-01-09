import React from 'react';
import moment from 'moment';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/es/Paper/Paper';

import { withStyles } from '@material-ui/core/styles';

import Avatar from './Avatar';

import classnames from 'classnames';

import randomColor from '../utils/color-from';
import senderName from '../utils/sender-name';

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

const Message = ({ classes, sender, content, activeUser, createdAt, statusMessage }) => {
  const isMessageFromMe = sender === 'me';
  const displayedName = senderName(sender);

  if (!statusMessage) {
    return (
      <div className={ classes.messageWrapper }>
        <Typography className={ classes.statusMessage }>
          <Typography variant="caption" style={{ color: randomColor(sender._id) }} className={ classes }>
            { displayedName }
          </Typography>
          { content }
          <Typography variant="caption" component="span">
            { moment(createdAt).fromNow() }
          </Typography>
        </Typography>
      </div>
    );
  }

  const userAvatar = (
    <Avatar colorFrom={sender} >
      { sender }
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
        <Typography variant='caption' style={{ color: randomColor(sender._id) }}>
          { displayedName }
        </Typography>
        <Typography variant='body1'>
          { content }
        </Typography>
        <Typography variant="caption" className={ classes.time }>
          { moment(createdAt).fromNow() }
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(Message);
