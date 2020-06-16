import React from "react";
import { isLoggedIn, getToken } from './utils.js'

const initialState = {
    isLoggedIn: isLoggedIn(),
    token: getToken(),
    error: ''
  }

const AuthContext = React.createContext(initialState);


const authReducer = (state, action) => {
    const { type } = action;
  switch (type) {
    case 'LOGIN':
      return {isLoggedIn: true, token: action.payload.token, error: ''};
    case 'LOGIN_ERROR':
      return {isLoggedIn: false, token: '', error: action.payload.message};
    case 'LOGOUT':
      return {isLoggedIn: false, token: '', error: ''};
    default:
      return state;
  }
};

const AuthProvider = ({children}) => {
  const [state,
    dispatch] = React.useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
};

export {AuthProvider, AuthContext};
