import axios from 'axios';

export default (id) => {
  return (dispatch) => {
    axios.delete('/api/books', {data: {id}})
      .then((response) => {
        dispatch({type: "DELETE_BOOK_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "DELETE_BOOK_ERROR", payload: err})
      })
  }
}