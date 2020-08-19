import React, { Component } from 'react';
import Navigation from './navigation';
import View from './view';
import { checkAuthorization, getUserData } from '../../calls/index';
import { BrowserRouter as Router } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userdata: {
                email: "",
                password: "",
                firstname: "",
                lastname: ""
            }
        };
    }

    componentDidMount() {
        getUserData().then((response) => {
            console.log(response.data)
            this.setState({userdata: response.data})
        })
    }

    render() {
        console.log(this.props);
        return(
            <div id="dashwrap">
                <Router path="/" component={Navigation}>
                    <Navigation />
                    <View submitLogout={this.props.submitLogout} userdata={this.state.userdata}/>
                </Router>
            </div>
        )
    }
}

export default Dashboard;