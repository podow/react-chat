import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from "@material-ui/core/Avatar";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/es/Paper/Paper";

import classnames from 'classnames';
import titleInitial from './utils/title-initial';

const drawerWidth = 320;

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerHeader: {
    padding: theme.spacing.unit
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  chatList: {
    overflowY: 'auto',
    height: `calc(100% - 56px)`,
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    height: 'auto',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    padding: theme.spacing.unit,
    width: `calc(100% - ${drawerWidth}px)`,
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

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    const messages = [
      {
        sender: 'me',
        content: 'Hello',
      },
      {
        sender: 'John Doe',
        content: 'World!',
      },
    ];

    const drawer = (
      <div>
        <div className={classes.toolbar} >
          <div className={classes.drawerHeader}>
            <TextField
              id="standard-search"
              placeholder="Search"
              type="search"
              fullWidth
              margin="normal"
            />
          </div>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((chat, index) => (
            <ListItem button key={index}>
              <Avatar>{titleInitial(chat)}</Avatar>
              <ListItemText primary={chat} />
            </ListItem>
          ))}
        </List>
        <Fab color="primary" aria-label="Add" className={classes.newChatButton}>
          <AddIcon />
        </Fab>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.bottomNav}
        >
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Telegram clone React
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.chatLayout}>

          <div className={classes.toolbar} />

          <div className={classes.messagesWrapper}>
            {messages && messages.map((message, index) => {
              const isMessageFromMe = message.sender === 'me';
              const userAvatar = (
                <Avatar>
                  {titleInitial(message.sender)}
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
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
