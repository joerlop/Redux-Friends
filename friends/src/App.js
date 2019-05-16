import React from 'react';
import './App.css';

import { Route } from "react-router-dom";

import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import PrivateRoute from "./PrivateRoute"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/friendslist" component={FriendsList} />
    </div>
  );
}

export default App;
