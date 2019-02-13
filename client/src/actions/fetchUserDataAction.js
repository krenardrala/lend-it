import axios from 'axios';

export default (id) => {
  return (dispatch) => {
    axios.get('/api/users', {params: {ID: id}})
      .then((response) => {
        dispatch({type: "FETCH_USER_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_ERROR", payload: err})
      })
  }
}