export default function reducer(state={
    books: [],
    fetching: false,
    fetched: false,
    error: null
  },action) {

  const resultState = {...state};

  switch (action.type) {
    case "FETCH_BOOKS": {
      debugger
      return {...state, fetching: true}
    }
    case "FETCH_BOOKS_ERROR": {
      //return {...state, fetching: false, error: action.payload}
      resultState.fetching = false;
      resultState.error = action.payload;
    }
    case "FETCH_BOOKS_SUCCESS": {
      /*return {
        ...state,
        fetching: false,
        fetched: true,
        books: action.payload
      }*/
      resultState.fetching = false;
      resultState.fetched = true;
      resultState.books = action.payload;
    }
    /*case "ADD_BOOK": {
      return {
        ...state.book, fetching: true}
    }*/
  }
  return resultState
}