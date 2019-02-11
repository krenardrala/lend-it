import axios from 'axios';
import setAuthorizationToken from '../setAuthorizationToken'
import jwt from 'jsonwebtoken';

export default (data) => {
  return (dispatch) => {
    axios.post('/api/auth', data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch({type: "LOGIN_SUCCESS", payload: jwt.decode(token)})
      })
      .catch((err) => {
        dispatch({type: "LOGIN_ERROR", payload: err})
      })
  }
}