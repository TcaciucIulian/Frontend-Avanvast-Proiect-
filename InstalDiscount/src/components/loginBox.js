import React, { useEffect, useState } from "react";

import { BiUserCircle } from "react-icons/bi";
import  Button from 'react-bootstrap/Button';
import './loginBox.css';

import {doLogin, reqLoginError, reqLoggedIn} from '../slices/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const LoginBox = () => {
    const [email, setEmail] = useState();
    const [password, setPasswaord] = useState();
    const [isNotValid, setIsNotValid] = useState(false);
    const [serverError, setServerError] = useState(false);
    const dispatch = useDispatch();
    const serverErrorSelector = useSelector(reqLoginError);
    const serverIsLoggedIn = useSelector(reqLoggedIn);
    let history = useHistory();

    const login = () => {
        const data = { 
            email,
            password
        }
        dispatch(doLogin(data));
    }

    useEffect(() => {
        setServerError(serverErrorSelector);
        setIsNotValid(!(email && password));
        
        if(serverIsLoggedIn) {
            console.log("Redirect...");
            history.push("/");
        }
    },[email, password, serverIsLoggedIn, serverErrorSelector]);


    return (
        <div className="content">
                <div className="title"> Login </div>
                {isNotValid ? (<div className="alert alert-danger"> Nu este valid </div>) : (<div className="alert alert-success"> Este valid </div>)}
                {serverError && (<div className="aler alert-danger"> Date incorecte </div>)}
                <div className="img">
                    <BiUserCircle style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label> Email </label>
                        <input type="text" placeholder="Email.... " onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className="form-group">
                        <label> Parola </label>
                        <input type="password" placeholder="Password..." onChange={(e) => setPasswaord(e.target.value)} value={password}></input>
                    </div>
                </div>
                <div className="footer">
                    <Button variant="dark" disabled={isNotValid} onClick={login}> Login </Button>
                </div>
        </div>
    )
}