import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles } from '@material-ui/core/styles';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const styles = theme => ({
  paper: {
    marginTop: 63 + theme.spacing.unit * 3,
    width: 500
  },
  tabContent: {
    padding: theme.spacing.unit * 3
  }
});

class WelcomePage extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value
    })
  };

  render() {
    const { classes, signup, login, isAuthenticated } = this.props;
    const { activeTab } = this.state;

    console.log(isAuthenticated);

    if (isAuthenticated) {
      return <Redirect to='/chat'/>
    }

    return (
      <>
        <AppBar>
          <ToolBar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              Telegram clone React Enter
            </Typography>
          </ToolBar>
        </AppBar>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs
                  value={activeTab}
                  onChange={this.handleTabChange}
                  fullWidth
                >
                  <Tab label="Sign In" />
                  <Tab label="Sign Up" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                { activeTab === 0 && <SignInForm onSubmit={login} /> }
                { activeTab === 1 && <SignUpForm onSubmit={signup} /> }
              </div>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(WelcomePage);
