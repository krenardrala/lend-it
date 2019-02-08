import axios from 'axios';

export default (data) => {
  return (dispatch) => {
    axios.post('/api/auth', data)
      .then((response) => {
        dispatch({type: "LOGIN_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOGIN_ERROR", payload: err})
      })
  }
}