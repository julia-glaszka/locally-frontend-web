import React from 'react';

const authContext = React.createContext({});

const AuthProvider = authContext.Provider;
const AuthConsumer = authContext.Consumer;
export {
    authContext, AuthConsumer, AuthProvider
};