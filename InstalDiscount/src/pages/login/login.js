import React, {useState} from "react";

import './login.css';

import { Header } from '../../components/header.js'
import Nav from 'react-bootstrap/esm/Nav';
import { LoginBox } from "../../components/loginBox";
import { RegisterBox } from "../../components/registerBox";
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const MenuItems = () => (
    <>
        <Nav.Link href='/'> Home </Nav.Link>
        <Nav.Link href='/produse'> Produse </Nav.Link>
        <Nav.Link href='/contact'> Contact </Nav.Link>
        <Nav.Link href='/recenzii'>Recenzii </Nav.Link> 
        <Nav.Link href="/cosulmeu"> <AiOutlineShoppingCart/> </Nav.Link>               
        
    </>
  );

  
const ProfileItems = () => (
    <>
        <Nav.Link href='/login'> <RiLoginCircleFill/> </Nav.Link>
    </>
  );


export const Login = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(true);

    const showRegister = () => {
        setIsRegisterOpen(true);
        setIsLoginOpen(false);
    }

    const showLogin = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    }

    return (
        <>
        <Header name="Instal Discount" MenuItems={<MenuItems/>} LoginItems={<ProfileItems/>}/>
        <div className="base-container">
            <div className="box-controller">
                <div className="controller" onClick={showLogin}>
                    Login
                </div>
                <div className="controller" onClick={showRegister}>
                    Register
                </div>
            </div>
        {isLoginOpen && <LoginBox/> }
        {isRegisterOpen && <RegisterBox/>}
        </div>
        </>
    )
}