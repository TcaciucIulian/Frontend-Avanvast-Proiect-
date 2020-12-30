import React from "react" 
import Pagination from 'react-bootstrap/Pagination'


export const Pag = (props) => {
    const { productsPerPage, totalProducts, paginate, nextPage, prevPage } = props
    const products = [];

    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        products.push(i);
    }
    
    return (
        <>
            <Pagination> 
                <Pagination.Prev onClick={() => prevPage()}/>
                {products.map((i) => (
                        <Pagination.Item key={i} onClick={() => paginate(i)}> {i} </Pagination.Item>
                ))}  
                <Pagination.Next onClick={() => nextPage()}/>
            
            </Pagination>
        </>
    )
}