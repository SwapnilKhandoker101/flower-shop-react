import React, { useEffect, useState } from 'react';
import "./Catalogue.css"
import Product from '../Product/Product';
import product1 from "../../images/product1.png"
import product2 from "../../images/product2.png"
import product3 from "../../images/product3.png"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cart from '../Cart/Cart';


const Catalogue = () => {

    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
        

    }
    ,[]);


    return (
        <div className='catalogue-main'>
            <div className="title text-center ">

            </div>
            <div className='main-container'>
                <div className="product-part ms-4 mt-5">
                    {/* <Product img={product1}></Product>
                    <Product img={product2}></Product>
                    <Product img={product3}></Product> */}

                    <Row xs={1} md={3} className="g-2">
                        {products.map((product) => (
                            <Col key={product.id}   className='mt-5'>
                                <Product
                                    key={product.id}
                                    product={product}
   
                                ></Product>
                            </Col>
                        ))}
                    </Row>


                </div>

                <div className=" me-5 mt-0 cart-part">
                    <Cart></Cart>

                </div>
            </div>
        </div>
    );
};

export default Catalogue;