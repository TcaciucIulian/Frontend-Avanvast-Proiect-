import React from 'react';


import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';


export const Header = (props) => {
    const {name, MenuItems, LoginItems} = props
    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
               <Container fluid style={{padding: '17px', marginLeft: '10%', marginRight: '10%'}}> 
                    <NavbarBrand href="/"> {name} </NavbarBrand>
                    <NavbarToggle aria-controls='responsive-navbar-nav'/>
                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            {MenuItems}
                            {LoginItems}
                        </Nav>
                    </NavbarCollapse>
                </Container>
        </Navbar>
    )
};