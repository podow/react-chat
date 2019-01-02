import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/es/Paper/Paper';

import { withStyles } from '@material-ui/core/styles';

import titleInitial from "../utils/title-initial";
import classnames from "classnames";

const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    padding: theme.spacing.unit,
    width: `calc(100% - ${320}px)`,
    backgroundColor: '#ffffff'
  },
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
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

class Chat extends Component {
  scrollDownHistory() {
    const {messagesWrapper} = this.refs;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.scrollDownHistory();
  }

  render() {
    const {classes, messages} = this.props;

    return (
      <main className={classes.chatLayout}>

        <div className={classes.toolbar} />

        <div className={classes.messagesWrapper} ref="messagesWrapper">
          {messages && messages.map((message, index) => {
            const isMessageFromMe = message.sender === 'me';
            const userAvatar = (
              <Avatar>
                { titleInitial(message.sender) }
              </Avatar>
            );

            return(
              <div
                key={index}
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
                    {message.sender}
                  </Typography>
                  <Typography variant='body1'>
                    {message.content}
                  </Typography>
                </Paper>
                {isMessageFromMe && userAvatar}
              </div>
            );
          })}
        </div>

        <div className={classes.messageInputWrapper}>
          <TextField
            multiline
            fullWidth
            rowsMax="4"
            placeholder="Enter your message"
            margin="normal"
          />
        </div>

      </main>
    );
  }
}

export default withStyles(styles)(Chat);
