import React, { useCallback, useState } from 'react';

import Nav from 'react-bootstrap/esm/Nav';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Header } from '../../components/header.js'
import { Footer} from '../../components/footer';
import qrcode from '../../images/QRCODE.png'
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const containerStyle = {
    width: '100%',
    height: '400px'
}

const center = {
    lat : -3.745,
    lng : -38.523
}

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


export const Contact = () => {
    const [map, setMap] = useState(null);


    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnMount = useCallback(function callback(map) {
        setMap(null)
    }, []);


    return (
        <>
            <Header name="Instal Discount" MenuItems={<MenuItems/>} LoginItems={<ProfileItems/>}/>
            <Container style={{padding: '30px'}}>
                <Row> <i> Date societate </i> </Row>
                <Row style={{padding: '20px'}}>
                    <Col> 
                        <div> <b> Numele :</b> SC Instal Discount SRL </div>
                        <div> <b> CUI :</b> 35544951 </div>
                        <div> <b> Cod unic de inregistrare :</b> J40/1214/2016 </div>
                        <div> <b> Cont :</b> RO37CECEB40330RON4184392 </div>
                        <div> <b> Banca :</b> Cec Bank, Toporasi Sector 4 Bucuresti </div>
                        <div> <b> Sediu :</b> Str Ipsilanti Voievod nr.6, Apt. 1, Bucuresti, Sector 2 </div>
                    </Col>
                    <Col>
                        <Row>
                        <Col>
                            <img src={qrcode} width="171px" height="150px"/>
                        </Col>
                        <Col>
                            <div><i> Pentru a adauga datele mai usor, scanati <b> QRCODE-ul </b>alaturat direct de pe telefonul dumneavoastra. </i> </div>
                        </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop: '30px'}}>
                    <LoadScript googleMapsApiKey="AIzaSyDBqj3pb9LNJ8-FDlBRSE7YEwlKF3z-NoU">
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnMount}/>
                    </LoadScript>
                </Row>
                <Row style={{padding: '40px', marginTop: '30px', backgroundColor: '#343a40'}}>
                    <Col> 
                        <Form>
                            <Form.Group>
                                <Form.Label style={{color: 'white'}}> Adresa Email </Form.Label>
                                <Form.Control type="email" placeholder="Adresa de email.... "/>
                                <Form.Label style={{color: 'white'}}> Subiect </Form.Label>
                                <Form.Control size="sm" as="select">
                                    <option> -- Alegeti -- </option>
                                    <option> Serviciu clienti </option>
                                </Form.Control>
                                <Form.Label style={{color: 'white'}}> Codul comenzii (daca exista)</Form.Label>
                                <Form.Control type="string" placeholder="Codul comenzii....."/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form.Label style={{color: 'white'}}> Text </Form.Label> 
                        <Form.Control as="textarea"/>
                    </Col>
                    <Button style={{marginTop: '20px'}} variant="secondary" size='lg' block onClick> Trimite </Button>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}