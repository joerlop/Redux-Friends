import React from "react";
import "./FriendsList.scss";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        toUpdate: {
            name: "",
            age: "",
            email: ""
        },
      updating: false
    };
  }

  toggleState = event => {
    event.preventDefault();
    this.setState({
      updating: !this.state.updating
    });
  };

  render() {
    return (
      <div className="friend">
        {this.state.updating ? (
          <>
            <form className="form" onSubmit={this.add}>
              <input
                placeholder="Name"
                value={this.state.toUpdate.name}
                onChange={e => this.handleChanges(e)}
                name="name"
              />
              <input
                placeholder="Age"
                value={this.state.toUpdate.age}
                onChange={e => this.handleChanges(e)}
                name="age"
              />
              <input
                placeholder="Email"
                value={this.state.toUpdate.email}
                onChange={e => this.handleChanges(e)}
                name="email"
              />
              <button>Go!</button>
            </form>
          </>
        ) : (
          <>
            <h2>{this.props.friend.name}</h2>
            <p>{this.props.friend.age}</p>
            <p>{this.props.friend.email}</p>
          </>
        )}
        <button onClick={e => this.props.delete(e, this.props.friend.id)}>
          DELETE
        </button>
        <button onClick={e => this.toggleState(e)}>UPDATE</button>
      </div>
    );
  }
}

export default Friend;
