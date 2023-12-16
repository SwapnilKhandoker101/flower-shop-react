import React from 'react';
import "./Catalogue.css"
import Product from '../Product/Product';
import product1 from "../../images/product1.png"
import product2 from "../../images/product2.png"
import product3 from "../../images/product3.png"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Catalogue = () => {

    let products = [product1, product2, product3,product1, product2, product3]


    return (
        <div className='catalogue-main'>
            <div className="title text-center ">

            </div>
            <div className='main-container mt-5'>
                <div className="product-part ms-4">
                    {/* <Product img={product1}></Product>
                    <Product img={product2}></Product>
                    <Product img={product3}></Product> */}

                    <Row xs={1} md={3} className="g-2">
                        {products.map((product) => (
                            <Col key={product.id} className='mt-5'>
                                <Product
                                    img={product}
   
                                />
                            </Col>
                        ))}
                    </Row>


                </div>

                <div className="cart-part">
                    <h1>Hello from cart part</h1>

                </div>
            </div>
        </div>
    );
};

export default Catalogue;