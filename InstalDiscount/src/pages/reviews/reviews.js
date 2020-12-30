import React, { useState } from "react";


import { Header } from '../../components/header'


import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import {Container, Form} from 'react-bootstrap';
import Nav from 'react-bootstrap/esm/Nav';

import { useHistory } from "react-router-dom";

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



export const Reviews = () => {

    const[radioValue, setRadioValue] = useState('');
    let history = useHistory();
     
    const radios = [
        {name: 'Foarte buna', value: '1'},
        {name: 'Buna', value: '2'},
        {name: 'Medie', value: '3'},
        {name: 'Slaba', value: '4'},
        {name: 'Foarte slaba', value: '5'}
    
    ]

    const [firstQuestion, setFirstQuestion] = useState(true);
    const [secondQuestion, setSecondQuestion] = useState(false);

    const handleOnClick = () => {
        setFirstQuestion(!firstQuestion)
        setSecondQuestion(!secondQuestion)
    }

    const handleFinal = () => {
        setFirstQuestion(!firstQuestion)
        setSecondQuestion(!secondQuestion)
        alert('Recenzia a fost trimisa')    
        history.push("/");
    }

    return (
        <>
        <Header name="Instal Discount" MenuItems={<MenuItems/>} LoginItems={<ProfileItems/>}/>
        <Container style={{border: '1px solid grey', paddingTop: '50px', marginTop: '40px'}} align="center">
            {firstQuestion && 
                            <> 
                                <h4> <i> Care este calitatea produselor noastre? </i> </h4>
                                <ButtonGroup toggle style={{padding: '30px', display: 'flex', flexDirection:'column'}}>
                                    {radios.map((radio, index) => (
                                        <ToggleButton style={{border: '1px solid whitesmoke'}} key={index} type="radio" variant="secondary" name="radio" value={radio.value} checked={radioValue === radio.value} onChange={(e) => setRadioValue(e.currentTarget.value)}>
                                             {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                                <Button style={{marginTop: '20px', marginBottom: '20px'}} variant="light" size='lg' block onClick={(e) => handleOnClick()}> Urmatoarea recenzie </Button>
                            </>
            }
            {secondQuestion && 
                            <>
                                <h4> <i> Ajuta-ne sa ne imbunatatim societatea. Scrie-ne o recenzie </i></h4>        
                                <Form.Label style={{color: 'white'}}> Text </Form.Label> 
                                <Form.Control as="textarea" style={{marginBottom: '10px'}}/>
                                <Button style={{marginTop: '20px', marginBottom: '20px'}} variant="secondary" size='lg' block onClick={() => handleFinal()}> Trimite </Button>
                            </>
                            }
        </Container>
        </>
    )
}