export default () => {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    dispatch({type: "LOGOUT_SUCCESS"})
  }
}