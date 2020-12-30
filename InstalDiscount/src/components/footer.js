import React from "react";

import { Container, Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/esm/Nav';
import './footer.css';

import { BsGeoAlt } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";

export const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white footer" style={{marginTop: '50px', padding: '5rem'}}>
            <Row xs={1} md={4}>
                <Col> 
                    <h4> Categorii </h4>
                    <Nav.Link href="/produse"> Sanitare </Nav.Link>
                    <Nav.Link href="/produse"> Termice </Nav.Link>
                    <Nav.Link href="/produse"> Instalatii </Nav.Link>
                </Col>
                <Col>
                    <h4> Informatii </h4>
                    <Nav.Link href="/contact"> Harta site-ului </Nav.Link>
                    <Nav.Link href="/"> Despre noi </Nav.Link>
                    <Nav.Link href="/termeni"> Termeni si conditii de utilizare </Nav.Link>
                </Col>
                <Col>
                    <h4> Contul meu </h4>
                    <Nav.Link href="#sanitare"> Comenzile mele </Nav.Link>
                    <Nav.Link > Infromatii personale </Nav.Link>
                </Col>
                <Col style={{borderLeft: '1px solid #6c757d' }}>
                    <h4> Informatii despre magazin </h4>
                    <Nav.Link> <BsGeoAlt/> SC Instal Discount SRL, Sector 2 Bucuresti  </Nav.Link>
                    <Nav.Link> <AiFillPhone/> Sunati-ne acum:  0765.040.223 </Nav.Link>
                    <Nav.Link> <BsEnvelopeFill/> E-mail: office@instaldiscount.ro </Nav.Link>
                    
                </Col>
            </Row>
        </Container>
    )
};
