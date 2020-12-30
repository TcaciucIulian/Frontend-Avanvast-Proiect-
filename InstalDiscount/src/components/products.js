import React from "react";

import { ProductCard } from './productCard';

export class Products extends React.Component {

    render() {
        const productsList = this.props.products.map(product => (  
            <div key={product.id}>
                <ProductCard product={product} handleAddToCart={this.props.handleAddToCart}/>                                
            </div>    
        )

        )

        return(
            <>
                {productsList}
            </>
        )
        
    }
}