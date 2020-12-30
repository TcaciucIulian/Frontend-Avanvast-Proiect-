import React from "react";
import axios from "axios";
import { Container, Col, Row } from 'react-bootstrap';

import { Header } from '../../components/header'
import Nav from 'react-bootstrap/esm/Nav';
import { Order } from '../../components/order';
import { Products } from "../../components/products";
import { Category } from "../../components/category";
import { Footer } from "../../components/footer";

import { RiLoginCircleFill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Pag} from '../../components/pag';

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



export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            filteredProducts : [],
            cartProducts : [],
            currentPage: 1,
            productsPerPage: 12,
            currentCategory: ''
        }
        this.handleChangeSort = this.handleChangeSort.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        }

    componentDidMount() {
        axios.get("./db.json").then(res => {
            this.setState({
                products : res.data.products,
                filteredProducts : res.data.products
            })
        })
        
        if(localStorage.getItem('cartProducts')) {
            this.setState({cartProducts: JSON.parse(localStorage.getItem('cartProducts'))})
        }
    }

    handleChangeSort(e) {
        this.setState({sort: e.target.value});
        this.listProducts();
    }
    

    handleChangeCategory(newCategory) {
        this.setState({currentCategory: newCategory})
        this.listProducts()
    }

    listProducts() {
        this.setState(state => {
            if(state.sort !== ''){
                state.products.sort((a, b) => (state.sort==='lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
            } else {
                state.products.sort((a, b) => (a.id < b.id ? 1 : -1))
            }
            console.log(state.currentCategory)
            if(state.currentCategory !== '') 
                    return {
                        filteredProducts: state.products.filter(a => a.category === state.currentCategory
                    )};
            
            return  {filteredProducts: state.products}
            })
    }

    handleAddToCart(e, product) {
        this.setState(state => {
            const cartProducts = state.cartProducts
            let productIsInCart = false;
            cartProducts.forEach(item => {
                if(item.id === product.id) {
                    productIsInCart = true;
                    console.log("Este deja in cos");
                }
            });
            if(!productIsInCart) {
                cartProducts.push({...product})
            }

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            return cartProducts   
        })
    }

    
    render() {
        const { currentPage, productsPerPage, filteredProducts } = this.state
        
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentPosts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct); 
        const paginate = pageNum => this.setState({currentPage: pageNum});
        const nextPage = () => this.setState({currentPage: currentPage + 1})
        const prevPage = () => this.setState({currentPage: currentPage - 1})
        
        return (
            <>
            <Header name="Instal Discount" MenuItems={<MenuItems/>} LoginItems={<ProfileItems/>}/>
            <Container fluid style={{paddingLeft: '10%', paddingRight: '10%', paddingTop: '15px'}}>
                <Row>
                    <Col sm={2} style={{borderRight: '1px solid black', paddingTop: '20px'}}>
                        <Category handleChangeCategory={this.handleChangeCategory}/>
                    </Col>
                    <Col style={{paddingTop: '20px', paddingLeft: '5%'}}>
                        <Row>
                            <Order style={{display: 'flex', flexDirection: 'row'}} sort={this.state.sort} handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length}/>
                        </Row>
                        <Row>
                            <Products products={currentPosts} handleAddToCart={this.handleAddToCart}/>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop: '100px', justifyContent:"center"}}>
                    <Pag productsPerPage={productsPerPage} totalProducts={filteredProducts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
                </Row>
            </Container>
            <Footer/>
            </>
        )       
    }
}