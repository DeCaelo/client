import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

export function signinUser({ email, password }) {
  // helps to get direct access to the Dispatch method
  // it is provided by redux thunk; return function instead of object
  return function(dispatch) {
  // Submit eamil/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password });
  // If request is good

  // * Update state to indicate user is authenticated
  // * Save the JWT token
  // * Redirect to the route ('/feature')

  // If requests is bad
  // * Show an error to the user

  }
}
