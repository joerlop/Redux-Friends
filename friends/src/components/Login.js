import React from "react";
import "./Login.scss";

import { connect } from "react-redux";
import { login } from "../actions";
import { Route } from "react-router-dom";
import Loader from 'react-loader-spinner';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      }
    };
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.user).then(() => {
      this.props.history.push('/friendslist');
    });
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.login}
      >
        <input
          placeholder="Username"
          value={this.state.user.username}
          onChange={e => this.handleChanges(e)}
          name="username"
        />
        <input
          placeholder="Password"
          value={this.state.user.password}
          onChange={e => this.handleChanges(e)}
          name="password"
        />
        <button onClick={this.login}>
        {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Log in'
            )}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  isLoggingIn: state.friendsReducer.isLoggingIn
});

export default connect(
  mapStateToProps,
  {
    login
  }
)(Login);
