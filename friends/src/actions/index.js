import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';

export const logIn = (event, user) => dispatch => {
    event.preventDefault();
    dispatch({ type: LOGGING_IN });
    axios
      .post('http://localhost:5000/api/login', user)
      .then(token => {
        console.log("Logging in", token);
        localStorage.setItem("token", JSON.stringify(token))
        // dispatch({ type: FETCH_SUCCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log("error", err.response);
        /*dispatch({
          type: FETCH_FAILURE,
          payload: `${err.response.status} ${err.response.statusText}`
        });*/
      });
  };