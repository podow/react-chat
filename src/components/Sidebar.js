import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

import {withStyles} from '@material-ui/core/styles';

import titleInitial from "../utils/title-initial";

const styles = theme => ({
  drawer: {
    width: '320px',
  },
  drawerHeader: {
    padding: theme.spacing.unit
  },
  menuButton: {
    marginRight: 20,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 320,
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
});

const Sidebar = ({ classes, chats }) => (
  <nav className={classes.drawer}>
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      open
    >
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
          {chats.map((chat, index) => (
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
          showLabels
          className={classes.bottomNav}
        >
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </div>
    </Drawer>
  </nav>
);

export default withStyles(styles)(Sidebar);
