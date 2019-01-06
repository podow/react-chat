import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { receiveAuth } from '../actions/auth';

class PrivateRoute extends Component {
  componentDidMount() {
    this.props.receiveAuth();
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;

    return (
      <Route { ...rest } render={ props => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      )} />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  receiveAuth,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));
