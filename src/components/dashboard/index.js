import React, { Component } from 'react';
import Navigation from './navigation';
import View from './view';
import { BrowserRouter as Router } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        console.log(this.props);
        return(
            <div id="dashwrap">
                <Router path="/" component={Navigation}>
                    <Navigation />
                    <View />
                </Router>
            </div>
        )
    }
}

export default Dashboard;