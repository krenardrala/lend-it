export default function reducer(state={
  userData: [],
  fetching: false,
  fetched: false,
  error: null
},action) {

  const resultState = {...state};

  if(action.type === "FETCH_USERS") {
    resultState.fetching = true
  }
  if(action.type === "FETCH_USER_ERROR") {
    resultState.fetching = false;
    resultState.error = action.payload;
  }
  if(action.type === "FETCH_USER_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
    resultState.userData = action.payload;
  }
  if(action.type === "CREATE_USER_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
  }
  if(action.type === "CREATE_USER_ERROR") {
    resultState.fetching = false;
    resultState.error = action.payload;
  }
  /*if(action.type === "DELETE_BOOK_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
  }
  if(action.type === "DELETE_BOOK_ERROR") {
    resultState.fetching = false;
    resultState.users = action.payload;
  }
  if(action.type === "UPDATE_BOOK_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
  }
  if(action.type === "UPDATE_BOOK_ERROR") {
    resultState.fetching = false;
    resultState.users = action.payload;
  }*/

  return resultState
}