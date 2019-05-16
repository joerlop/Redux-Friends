// Let's build some action creators 😃
import axios from 'axios';
import { axiosWithAuth } from "../axiosWithAuth";
// action types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ABSOLUTE_FAILURE = 'LOGIN_ABSOLUTE_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FRIENDS_FAILURE });
    });
};

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';
export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axiosWithAuth()
    .post('http://localhost:5000/api/friends', friend)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_FAILURE });
    });
};

export const DEL_FRIEND_START = 'DEL_FRIEND_START';
export const DEL_FRIEND_SUCCESS = 'DEL_FRIEND_SUCCESS';
export const DEL_FRIEND_FAILURE = 'DEL_FRIEND_FAILURE';
export const deleteFriend = id => dispatch => {
  dispatch({ type: DEL_FRIEND_START });
  axiosWithAuth()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DEL_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DEL_FRIEND_FAILURE });
    });
};
