import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProductCard = ({product, handleAddToCart}) => {
    return (
        <div style={{padding: '10px'}}>
            <Card key={product.id} style = {{width: '250px', height:'420px'}}>
                <Card.Img variant="top" src={product.src}/>
                <Card.Body>
                    <Card.Title> {product.name} </Card.Title>
                    <Card.Text> {product.price === "Cere oferta" ? <div> {product.price} </div> : <div> {product.price} Lei </div>} </Card.Text>
                    <Button className="btn-block" variant="dark" onClick={(e) => handleAddToCart(e, product)}> Adauga in cos </Button>
                </Card.Body>
            </Card>
        </div>
    )
}