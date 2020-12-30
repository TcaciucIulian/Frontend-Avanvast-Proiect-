import React from "react";
import '../home/home.css'

import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import Carousel  from '../../components/carousel'
import Nav from 'react-bootstrap/esm/Nav';
import { Container, Col, Row } from 'react-bootstrap';
import Card from '../../components/card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import sanitare from '../../images/sanitare.jpg';
import instalati from '../../images/instalatii.jpg';
import termice from '../../images/termice.jpg';
import logo from '../../images/logo.jpg';
import brands from '../../images/brands.png';
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { SiCashapp } from 'react-icons/si';
import { SiHellofresh } from 'react-icons/si';
import { AiFillPhone } from "react-icons/ai";


const MenuItems = () => (
    <>
        <Nav.Link href='/'> Home </Nav.Link>
        <Nav.Link href='/produse'> Produse </Nav.Link>
        <Nav.Link href='/contact'> Contact </Nav.Link>
        <Nav.Link href="/recenzii"> Recenzii </Nav.Link>
        <Nav.Link href="/cosulmeu"> <AiOutlineShoppingCart/> </Nav.Link>               
        
    </>
  );

  
const ProfileItems = () => (
    <>
        <Nav.Link href='/login'> <RiLoginCircleFill/> </Nav.Link>
    </>
  );
   

export const Home = () => {
    return (
    <>
        <Header name="Instal Discount" MenuItems={<MenuItems/>} LoginItems={<ProfileItems/>}/>
        <Container fluid> 
            <Row xs={1} md={3} align="center" style={{backgroundColor: 'black', color: 'white', borderTop: '1px solid whitesmoke', padding: '10px'}}> 
                <Col> <b> <SiHellofresh style={{marginRight: '5px', marginBottom: '5px'}}/> BINE ATI VENIT !  </b> </Col>
                <Col>  <i> <AiFillPhone style={{marginRight: '5px', marginBottom:'4px'}}/> Sunati-ne acum : <b> 0753707094 </b></i></Col> 
                <Col> <SiCashapp style={{marginRight: '5px', marginBottom: '4px'}}/> <b> Plata ramburs </b> </Col>
            </Row>
        </Container>
        <Container fluid style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Carousel/>
            <Row style={{padding: '10px'}} xs={1} md={3}>
                <Col style={{marginBottom: '10px'}}> <Card nume="Sanitare" image={sanitare}/> </Col>
                <Col style={{marginBottom: '10px'}}> <Card nume="Instalatii" image={instalati}/> </Col>
                <Col> <Card nume="Termice" image={termice} /> </Col>
            </Row>
            <Row  style={{padding: '10px', marginTop: '10px'}} xs={1} md={2}>
                <Col style={{borderRight:'1px solid black'}}> 
                    <Container>
                        <Alert>
                            <Alert.Heading> Bine ati venit! V-ati intrebat cine suntem? </Alert.Heading> <br></br>
                            <p>
                            SC Instal Discount SRL a fost infiintata avand ca obiectiv de activitate distributia si furnizarea materialelor sanitar si termice venind in intampinarea d-voastra cu preturi mici si discounturi la o larga gama de produse ce acopera in totalitate aria instalatiilor
                            <br></br>
                            <br></br>
                            Stim ca e greu a avea ca si concurenta marile magazine de profil dar totodata stim ca preturile noastre la produse vor face diferenta si vom contribuii la  imbunatatirea si cresterea  afacerii d-voastra.
                            <br></br>
                            <br></br>
                            Incercam sa facem o selectie a produselor care se regasesc pe piata, ca notiunea "calitate -pret" sa corespunda si sa nu venim cu produse de o calitate indoielnica. Suntem dedicati calitatii superioare a produselor si sistemelor promovate de brand-uri nationale si internationale de succes, fiind cea mai sigura garantie a calitatii pentru clientii nostri .
                            <br></br>
                            <br></br>
                            Asteptam sa ne solicitati cu incredere serviciile pentru a va bucura de calitate si maxima seriozitate.
                            Echipa Instal Discount.
                            </p>
                        </Alert>
                    </Container>
                </Col>
                <Col className="text-center">  
                    <Container>
                        <img src={logo} alt="Logo societate" width='80%' height='250rem'></img>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h6> Echipa instal discount va sta la dispozitie! </h6>
                        <br></br>
                        <br></br>
                        <Button variant="dark" block href='/produse'> Continua spre catalog </Button>
                    </Container>
                </Col>
            </Row>
            <Row style={{padding: "10px", borderTop: "1px solid grey", marginTop: '10px'}}>
                    <Col className="text-center"> <img src={brands} alt="brands" width='100%'/> </Col>
            </Row>
        </Container>
        <Footer/>
    </>
    )
}
