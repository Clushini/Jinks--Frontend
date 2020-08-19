import React, { Component } from 'react';
import LoginArea from './login';
import RegisterArea from './register';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: "Register",
            registerInfo: {username: "", password: ""},
            loginInfo: {username: "", password: ""}
        }

        this.updateRegisterInfo = this.updateRegisterInfo.bind(this);
        this.updateLoginInfo = this.updateLoginInfo.bind(this);
        this.sendSubmit = this.sendSubmit.bind(this);
    }

    sendSubmit(type) {
        if (type == "login") {
            this.props.submitLogin(this.state.loginInfo);
        }
        if (type == "register") {
            this.props.submitRegister(this.state.registerInfo);
        }
    }

    updateRegisterInfo(value, field) {
        let copyRegisterInfo = Object.assign({}, this.state.registerInfo);
        copyRegisterInfo[field] = value;
        this.setState({
            registerInfo: copyRegisterInfo
        })
    }

    updateLoginInfo(value, field) {
        let copyLoginInfo = Object.assign({}, this.state.loginInfo);
        copyLoginInfo[field] = value;
        this.setState({
            loginInfo: copyLoginInfo
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className="loginwrap">
                <div className="loginarea">
                    <div className="tabs">
                        <div className={this.state.currentTab == "Register" ? "tab active" : "tab"} onClick={() => this.setState({currentTab: "Register"})}>Register</div>
                        <div className={this.state.currentTab == "Login" ? "tab active" : "tab"} onClick={() => this.setState({currentTab: "Login"})}>Login</div>
                    </div>
                    <div className="area">
                        {this.state.currentTab == "Register" && <RegisterArea updateInfo={this.updateRegisterInfo} submit={() => this.sendSubmit("register")}/>}
                        {this.state.currentTab == "Login" && <LoginArea updateInfo={this.updateLoginInfo} submit={() => this.sendSubmit("login")}/>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login