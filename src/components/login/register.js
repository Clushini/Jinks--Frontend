import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../../media/logoblue.png';

const RegisterArea = (props) => {
    return(
        <>
            <p>
                <img src={Logo} />
                <strong>Warning:</strong> This is an early access account and data may not persist through iterations.
            </p>
            <div className="fieldwrap">
                <TextField required id="standard-required" label="Username" defaultValue="Username" onChange={(e) => props.updateInfo(e.target.value, "username")}/>
            </div>
            <div className="fieldwrap">
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => props.updateInfo(e.target.value, "password")}
                />
            </div>
            <div className="submitbutton">
                <Button variant="contained" color="primary" onClick={props.submit}>
                    Register
                </Button>
            </div>
        </>
    )
}

export default RegisterArea;