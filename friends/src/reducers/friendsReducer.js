import { LOGGING_IN } from "../actions";

// import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
    return {
      ...state,
      isLoggingIn: true,
    };
    default:
      return state;
  }
};
