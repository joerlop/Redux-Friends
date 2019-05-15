import React from "react";
import "./Login.css";

import { connect } from "react-redux";
import { logIn } from "../actions";
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

  render() {
    return (
      <form className="form" onSubmit={(e) => this.props.logIn(e, this.state.user)}>
        <input
          placeholder="Username"
          value={this.state.user.username}
          onChange={(e) => this.handleChanges(e)}
          name="username"
        />
        <input
          placeholder="Password"
          value={this.state.user.password}
          onChange={(e) => this.handleChanges(e)}
          name="password"
        />
        <button onClick={(e) => this.props.logIn(e, this.state.user)}>Submit</button>
        {this.props.isLoggingIn && (
        <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  loggingIn: state.friendsReducer.isLoggingIn
});

export default connect(
  mapStateToProps,
  {
    logIn
  }
)(Login);
