import React, { useState } from 'react';
import Dashboard from './components/dashboard/index';
import Login from './components/login/index';
import { registerUser, getLogin } from './calls/index';
import { useCookies } from 'react-cookie';
import './App.scss';


const App = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['login', 'token']);

  let submitLogin = (data) => {
    if (data.username && data.password) {
      getLogin(data.username, data.password).then((response) => {
        console.log(response);
        if (response.data) {
          setCookie('login', data.username, { path: '/' });
          setCookie('token', response.data, { path: '/' });
          window.location.reload();
        }
        else {
          alert("Wrong username/password combination")
        }
      })
    }
  }

  let submitRegister = (data) => {
    console.log(data);

    if (data.username && data.password) {
      registerUser(data.username, data.password).then((response) => {
        console.log(response);
        if (response.data == "SUCCESS") {
          alert("Successfully created user. You may login now.")
        }
        else {
          alert("Error! Username already taken.")
        }
      })
    }
  }

  let submitLogout = () => {
    setCookie('login', '', { path: '/' });
    setCookie('token', '', { path: '/' });
    window.location.reload();
  }

  return (
    <div id="main">
      { 
        !cookies.login && <Login 
                            updateUsername={setUserName} 
                            updatePassword={setPassword} 
                            submitLogin={submitLogin}
                            submitRegister={submitRegister}
                          /> 
      }
      { (cookies.login && cookies.token) && <Dashboard submitLogout={submitLogout}/> }
    </div>
  );
}

export default App;