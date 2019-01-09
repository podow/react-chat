import React, {Component} from 'react';

import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Message from './Message';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  paper: {
    padding: theme.spacing.unit * 3
  }
});

class ChatWrapper extends Component {
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
    const { classes, messages, match, activeUser } = this.props;

    if (!match.params.chatId) {
      return (
        <Paper className={ classes.paper }>
          <Typography variant="display1" gutterBottom>
            Start messaging...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Global</strong> to explore communities around there.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Recents</strong> to see your recent conversations.
          </Typography>
        </Paper>
      );
    }

    return messages && messages.length ? (
      <div className={ classes.messagesWrapper } ref="messagesWrapper">
        { messages.map((message, index) => (
          <Message
            key={ index }
            activeUser={ activeUser }
            { ...message }
          />
        )) }
      </div>
    ) : (
      <Typography variant="display1">
        There is no messages yet...
      </Typography>
    );
  }
}

// export default withStyles(styles)(ChatWrapper);
export default withRouter(withStyles(styles)(ChatWrapper));
