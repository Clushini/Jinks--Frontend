import React from 'react';
import { Route, Redirect } from "react-router-dom";
import navitems from './utils/nav';
import UserBar from './userbar';
import HelpUs from '../views/helpus/index';

const View = (props) => {
    return(
        <div id="viewwrap">
            <UserBar />
            <Route exact path="/"><Redirect to="/home" /></Route>
            {
                navitems.map(item => {
                    return <Route path={item.path} component={item.component} />
                })
            }
            <Route path={'/helpus'} component={HelpUs} />
        </div>
    )
}

export default View;