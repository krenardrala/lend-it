export default function reducer(state={
  user: [],
  fetching: false,
  fetched: false,
  error: null,
  isAuthenticated: false
},action) {

  const resultState = {...state};

  if(action.type === "FETCH_USERS") {
    resultState.fetching = true
  }
  if(action.type === "FETCH_USERS_ERROR") {
    resultState.fetching = false;
    resultState.error = action.payload;
  }
  if(action.type === "FETCH_USERS_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
    resultState.user = action.payload;
  }
  if(action.type === "AUTHENTICATION_SUCCESS") {
    resultState.fetching = false;
    resultState.fetched = true;
    resultState.user = action.payload;
    if(resultState.user){
      resultState.isAuthenticated = true;
    }else {
      resultState.isAuthenticated = false;
    }
  }
  if(action.type === "AUTHENTICATION_ERROR") {
    resultState.fetching = false;
    resultState.user = action.payload;
  }
  if(action.type === "LOGOUT_SUCCESS") {
    resultState.fetching = false;
    resultState.user = [];
    resultState.isAuthenticated = false;
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