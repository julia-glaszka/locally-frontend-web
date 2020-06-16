import React from 'react'
import Navbar from './components/common/Navbar.js';
import CustomFooter from './components/common/CustomFooter.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { routes } from "./config/routes.js";
import ProtectedRoute from './components/auth/ProtectedRoute.js';


export const App = () => ( <> 
        <Navbar/>
        <Router>
            <div style={{minHeight: "100vh"}}>
                <Switch>
                    { routes.map(route => (
                         route.protected === true ? <ProtectedRoute {...route} />: <Route {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
        <CustomFooter/>
    </>
)

