import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

import NewChatButton from './NewChatButton';
import ChatList from './ChatList';

const styles = theme => ({
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
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    padding: theme.spacing.unit
  },
});

class Sidebar extends Component {
  state = {
    activeTab: 0,
    searchValue: '',
  };

  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value
    })
  };

  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value
    })
  };

  filterChats = chats => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      )
      .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
      );
  };

  render() {
    const { classes, chats, createChat } = this.props;
    const { activeTab, searchValue } = this.state;

    return (
      <nav className={classes.drawer}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >

          <div className={ classes.toolbar } >
            <div className={ classes.drawerHeader }>
              <TextField
                id="standard-search"
                placeholder="Search"
                type="search"
                fullWidth
                margin="normal"
                value={ searchValue }
                onChange={ this.handleSearchChange }
              />
            </div>
          </div>

          <ChatList chats={ this.filterChats(activeTab === 0 ? chats.my : chats.all) } />

          <NewChatButton onClick={ createChat } />

          <BottomNavigation
            value={ activeTab }
            onChange={ this.handleTabChange }
            showLabels
            className={ classes.bottomNav }
          >
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
        </Drawer>
      </nav>
    );
  }
}

export default withStyles(styles)(Sidebar);
