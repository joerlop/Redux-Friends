import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ABSOLUTE_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DEL_FRIEND_START,
  DEL_FRIEND_SUCCESS
} from "../actions";

// import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false,
  error: "",
  deletingFriend: false,
  fetchingFriends: false,
  savingFriends: false,
  updatingFriend: false
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        error: ""
      };
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: [...state.friends, ...action.payload]
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        savingFriends: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        savingFriends: false,
        friends: [...action.payload]
      };
      case DEL_FRIEND_START:
      return {
        ...state,
        deletingFriend: true
      };
      case DEL_FRIEND_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        friends: [...action.payload]
      };
    default:
      return state;
  }
};
