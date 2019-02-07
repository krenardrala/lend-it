import axios from 'axios';

export default (data) => {
  return (dispatch) => {
    axios.put('/api/books', data)
      .then((response) => {
        dispatch({type: "UPDATE_BOOK_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "UPDATE_BOOK_ERROR", payload: err})
      })
  }
}