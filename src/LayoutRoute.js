import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';


const LayoutRoute = (props) => {
    return (
        <div>

            { /* Main navgation */ }
            <NavBar  
                links={
                [
                    {
                    'path': '/signup',
                    'label': 'Click here for the signup page'
                    },
                    {
                    'path': '/about',
                    'label': 'Click here for the about page'
                    }
                ]
                } 
            />

            <div className="content" style={{minHeight: 'calc(100vh - 112px)'}}>
                <Route path={props.path} exact={props.exact} component={props.component} />
            </div>

        </div>
    )
}

export default LayoutRoute;
