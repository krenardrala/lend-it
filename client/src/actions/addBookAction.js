import axios from 'axios';

export default (data) => {
  return (dispatch) => {
    axios.post('/api/books', data)
      .then((response) => {
        dispatch({type: "ADD_BOOK_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "ADD_BOOK_ERROR", payload: err})
      })
  }
}