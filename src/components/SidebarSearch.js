import React from 'react';

import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    padding: theme.spacing.unit
  },
});

const SidebarSearch = ({ classes }) => (
  <div className={ classes.toolbar } >
    <div className={ classes.drawerHeader }>
      <TextField
        id="standard-search"
        placeholder="Search"
        type="search"
        fullWidth
        margin="normal"
      />
    </div>
  </div>
);

export default withStyles(styles)(SidebarSearch);
