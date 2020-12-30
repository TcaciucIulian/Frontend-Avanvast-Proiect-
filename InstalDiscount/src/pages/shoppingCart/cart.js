import React, {useState} from "react";

import {Container, Col, Row, Button} from 'react-bootstrap';
import { Header } from '../../components/header'

import Nav from 'react-bootstrap/esm/Nav';
import { BsFillXSquareFill } from "react-icons/bs";
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




export const Cart = (props) => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts"))); 
    const [total, setTotal] = useState(cartProducts.reduce((a,c) => a + c.price*c.quantity, 0));
    
    const handleRemoveFromCart = (product) => {
        setCartProducts(cartProducts.filter(elm => elm.id !== product.id))
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        setTotal(total - product.price * product.quantity)
        }
    
    const handleChangeQuantity = (e, product) => {
        let prevProductQuantity = product.quantity
        product.quantity = e.target.value;
        console.log(product.quantity);
        setTotal(total + (product.quantity-prevProductQuantity)*product.price)
    }

    return (
        <>
        <Header name="Instal Discount" MenuItems={<MenuItems/>} LoginItems={<ProfileItems/>}/>
        <Container style={{padding: '40px'}}>
            {cartProducts.length===0 ? "Cosul este gol" : <div style={{marginBottom:'20px'}}> Ai {cartProducts.length} produse adaugate in cos</div>}
            {cartProducts.map(product => (
                <Row style={{alignItems: 'center', padding:'30px', borderBottom: '1px solid grey'}}>
                    <Col> <img src={product.src} width="80%"/> </Col>
                    <Col> {product.name} </Col>
                    <Col> {product.price} </Col>
                    <Col>  
                        <Row>
                            <Col> <label> Cantitate </label> </Col>
                            <Col> <input type="number" name="product" min="1" max="2000" onChange={(e) => handleChangeQuantity(e, product)}></input> </Col>
                        </Row>
                    </Col>
                    <Col> <BsFillXSquareFill onClick={(e) => handleRemoveFromCart(product)}/> </Col>
                </Row>
            ))}
            <Row style={{alignItems: 'center', padding:'40px'}}>
                <Col> <b> Total : {total} </b> </Col>
                <Col> 
                    <Button block size="md" variant="dark"> Plateste ! </Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}