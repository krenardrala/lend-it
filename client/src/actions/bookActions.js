import axios from 'axios';

export default () => {
  return (dispatch) => {
    axios.get('/api/books')
      .then((response) => {
        dispatch({type: "FETCH_BOOKS_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_BOOKS_ERROR", payload: err})
      })
  }
}