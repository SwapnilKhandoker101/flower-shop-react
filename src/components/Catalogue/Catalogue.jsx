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
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Catalogue = () => {

    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
        

    }
    ,[]);

    useEffect(()=>{
        const storedCart=getShoppingCart()
        const savedCart=[]

        for (const id in storedCart){
            const addedProduct=products.find(product=>product.id==id)

            if (addedProduct){
                const quantity=storedCart[id]
                addedProduct.quantity=quantity
                savedCart.push(addedProduct)

            }
        }
        setCart(savedCart)



    },[products])

    const handleAddToCart=(product)=>{
        // state is immutable in react
        // const newCart=[...cart,product];
        //if product does not exist in the cart , then set quantity =1
        //if exist then update the quantity by 1
        let newCart=[];
        const exist=cart.find(pd=>pd.id==product.id);
        if(!exist){
            product.quantity=1
            newCart=[...cart,product]
        }else{
            exist.quantity=exist.quantity+1 
            const remaining=cart.filter(pd=>pd.id!== product.id)
            newCart=[...remaining,exist]
        }



        setCart(newCart);
        addToDb(product.id);

        
    }


    return (
        <div className='catalogue-main'>
            <div className="title text-center ">

            </div>
            <div className='main-container'>
                <div className="product-part ms-4 mt-5">
                 

                    <Row xs={1} md={3} className="g-2">
                        {products.map((product) => (
                            <Col key={product.id}   className='mt-5'>
                                <Product
                                    key={product.id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
   
                                ></Product>
                            </Col>
                        ))}
                    </Row>


                </div>

                <div className=" me-5 mt-0 cart-part">
                    <Cart cart={cart}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Catalogue;