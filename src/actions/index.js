import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

export function signinUser({ email, password }) {
  return function(dispatch) {
  // Submit eamil/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
  // If request is good

  // * Update state to indicate user is authenticated
  // * Save the JWT token
  // * Redirect to the route ('/feature')

  // If requests is bad
  // * Show an error to the user

  }
}
