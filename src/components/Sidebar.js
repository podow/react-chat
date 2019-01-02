import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { withStyles } from '@material-ui/core/styles';

import SidebarSearch from './SidebarSearch';
import NewChatButton from './NewChatButton';
import ChatList from './ChatList';

const styles = () => ({
  drawer: {
    width: 425,
  },
  menuButton: {
    marginRight: 20,
  },
  drawerPaper: {
    width: 320,
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

      <SidebarSearch />
      <ChatList chats={chats} />
      <NewChatButton />

      <BottomNavigation
        showLabels
        className={classes.bottomNav}
      >
        <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
      </BottomNavigation>
    </Drawer>
  </nav>
);

export default withStyles(styles)(Sidebar);
