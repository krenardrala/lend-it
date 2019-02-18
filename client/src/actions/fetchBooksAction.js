import axios from 'axios';

export default (id) => {
  return (dispatch) => {
    axios.get('/api/books', {params: {ID: id}})
      .then((response) => {
        dispatch({type: "FETCH_BOOKS_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_BOOKS_ERROR", payload: err})
      })
  }
}