import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';

import Message from './Message';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
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
    const {classes, messages} = this.props;

    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((message, index) => {
          return <Message key={index} {...message} />;
        })}
      </div>
    );
  }
}

export default withStyles(styles)(ChatWrapper);
