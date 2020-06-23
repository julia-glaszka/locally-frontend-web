import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = config => {
    return localStorage.getItem(config.requiredElement) ?  
    <Route {...config}/> : <Redirect to={config.redirectTo}/> 
}

export default ProtectedRoute;
