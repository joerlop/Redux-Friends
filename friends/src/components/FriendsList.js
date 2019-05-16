import React from "react";
import "./FriendsList.scss";

import { getData, addFriend, deleteFriend } from "../actions";
import { connect } from "react-redux";
import Friend from "./Friend";

import axios from "axios"
import Loader from 'react-loader-spinner';



class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  componentDidMount() {
    this.props.getData();
  }

  add = event => {
      event.preventDefault();
        this.props.addFriend(this.state.friend);
  }

  delete = (event, id) => {
    event.preventDefault();
      this.props.deleteFriend(id);
}

  render() {
    return (
      <div className="friends-main-container">
        <div className="friends-container">
          {this.props.friends.length > 0 &&
            this.props.friends.map(friend => (
              <Friend delete={this.delete} friend={friend} key={friend.id} />
            ))}
        </div>
        <form className="form" onSubmit={this.add}>
          <input
            placeholder="Name"
            value={this.state.friend.name}
            onChange={e => this.handleChanges(e)}
            name="name"
          />
          <input
            placeholder="Age"
            value={this.state.friend.age}
            onChange={e => this.handleChanges(e)}
            name="age"
          />
            <input
            placeholder="Email"
            value={this.state.friend.email}
            onChange={e => this.handleChanges(e)}
            name="email"
          />
          <button onClick={this.add}>
            {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Add"
            )}
          </button>
        </form>
      </div>
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
    getData, addFriend, deleteFriend
  }
)(FriendsList);
