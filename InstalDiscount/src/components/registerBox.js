import React, { useEffect, useState } from "react";

import { BiUserCircle } from "react-icons/bi";
import  Button from 'react-bootstrap/Button';
import './loginBox.css';


import { useDispatch, useSelector  } from 'react-redux';
import { doRegister, reqRegisterData, clearRegisterData } from '../slices/userSlice';
import { useHistory } from 'react-router-dom';


export const RegisterBox = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [isNotValid, setIsNotValid] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const registerResponse = useSelector(reqRegisterData);

    useEffect(() => {
        if(registerResponse && registerResponse._id) {
            history.push("/login");
            dispatch(clearRegisterData());
        }
        setIsNotValid(!(name && email && password && confirmPassword));
    },[registerResponse, history, name, email, password, confirmPassword]);

    const register = () => {
        const data = {
            name,
            email,
            passwords: {
                password,
                confirmPassword
            },
        };
        if(!isNotValid) dispatch(doRegister(data));
        console.log(data);
        alert("Inregistrare realizata cu succes")
    };

    return (
        <>
        <div className="content">
                <div className="title"> Register </div>
                {isNotValid ? (<div className="alert alert-danger"> Nu este valid </div>) : (<div className="alert alert-success"> Este valid </div>)}
                <div className="img">
                    <BiUserCircle style={{width: '100%', height: '100%' }}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label> Nume utilizator </label>
                        <input type="text" placeholder="Nume utilizator.." onChange={(e) => setName(e.target.value)} value={name}></input>
                    </div>
                    <div className="form-group">
                        <label> Email </label>
                        <input type="text" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className="form-group">
                        <label> Parola </label>
                        <input type="password" placeholder="Parola..." onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    </div>
                    <div className="form-group">
                        <label>Confirma parola </label>
                        <input type="password" placeholder="Parola..." onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                    </div>
                </div>
                <div className="footer">
                    <Button variant="dark" disabled={isNotValid} onClick={register}> Register </Button>
                </div>
        </div>
        </>
    )
}