import axios from 'axios';

export default (data) => {
  return (dispatch) => {
    axios.post('/api/users', data)
      .then((response) => {
        dispatch({type: "CREATE_USER_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "CREATE_USER_ERROR", payload: err})
      })
  }
}