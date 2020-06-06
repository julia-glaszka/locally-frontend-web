import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = config => {
    console.log("protected", config)
    return localStorage.getItem(config.requiredElement) ?  
    <Route {...config}/> : <Redirect to={config.redirectTo}/> 
}

export default ProtectedRoute;
