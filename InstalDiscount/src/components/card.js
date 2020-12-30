import React from 'react';
import Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const OneCard = (props) => {
    const {nume, image} = props
    return (
        <Card style={{width: '100%', border:'1px solid black'}}>
            <Card.Img variant='flush' src={image} height='230rem'/>
            <Card.Body>
            <Card.Title> {nume} </Card.Title>
                <Button variant="dark" href="/produse"> Vezi stocul </Button>
            </Card.Body>
        </Card>
    )
}

export default OneCard;