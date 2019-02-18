export default function reducer(state={
    books: [],
    fetching: false,
    fetched: false,
    error: null
  },action) {

  const resultState = {...state};

  if(action.type === "FETCH_BOOKS") {
    resultState.fetching = true
  }
  if(action.type === "FETCH_BOOKS_ERROR") {
    resultState.fetching = false;
    resultState.error = action.payload;
  }
  if(action.type === "FETCH_BOOKS_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
    resultState.books = action.payload;
  }
  if(action.type === "ADD_BOOK_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
    resultState.books = action.payload;
  }
  if(action.type === "ADD_BOOK_ERROR") {
    resultState.fetching = false;
    resultState.books = action.payload;
  }
  if(action.type === "DELETE_BOOK_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
  }
  if(action.type === "DELETE_BOOK_ERROR") {
    resultState.fetching = false;
    resultState.books = action.payload;
  }
  if(action.type === "UPDATE_BOOK_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
  }
  if(action.type === "UPDATE_BOOK_ERROR") {
    resultState.fetching = false;
    resultState.books = action.payload;
  }

  return resultState
}