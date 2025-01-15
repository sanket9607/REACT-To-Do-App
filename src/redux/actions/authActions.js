export const login = (username, password) => {
  return (dispatch) => {
    // Simulating an API call
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        dispatch({ type: 'LOGIN_SUCCESS' });
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        dispatch({ type: 'LOGIN_FAILURE' });
      }
    }, 1000);
  };
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
  return { type: 'LOGOUT' };
};

