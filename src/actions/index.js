import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:8000';

export function signinUser({ email, password }) {
  // helps to get direct access to the Dispatch method
  // it is provided by redux thunk; return function instead of object
  return function(dispatch) {
  // Submit eamil/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
      // If request is good
      // * Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
      // * Save the JWT token to Local storage
        localStorage.setItem('token', response.data.token);
      // * Redirect to the route '/feature'
        browserHistory.push('/feature');
      })

      .catch(() => {
      // If requests is bad
      // * Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}
