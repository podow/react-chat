import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signup, login } from '../actions';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login
}, dispatch);

// const mapDispatchToProps = dispatch => ({
//   signup: (username, password) => dispatch(signup(username, password)),
//   login: (username, password) => dispatch(login(username, password)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
