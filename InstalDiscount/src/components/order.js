import React from "react";
import { Container } from "react-bootstrap";

import { Row, Col} from 'react-bootstrap';

export const Order = (props) => {
    const {sort, handleChangeSort, count} = props;

    return (
        <Container fluid style={{padding: '10px'}}>
            <Row xs={1} md={2}>
                <Col> <b> Toate produsele </b> : {count} produse gasite</Col>
                <Col> 
                    <select style={{paddingRight: '5%', width: 'fit-content'}} className="form-control" value={sort} onChange={handleChangeSort}>
                        <option value=" "> Ordoneaza produsele </option>
                        <option value="lowest"> Pret minim </option>
                        <option value="highest"> Pret maxim </option>
                    </select>
                </Col>
            </Row>
        </Container>
    )
}