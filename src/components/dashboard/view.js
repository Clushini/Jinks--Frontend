import React from 'react';
import { Route, Redirect } from "react-router-dom";
import navitems from './utils/nav';
import Home from '../views/home/index';

const View = (props) => {
    return(
        <div id="viewwrap">
            <Route exact path="/"><Redirect to="/home" /></Route>
            {
                navitems.map(item => {
                    return <Route path={item.path} component={item.component} />
                })
            }
        </div>
    )
}

export default View;