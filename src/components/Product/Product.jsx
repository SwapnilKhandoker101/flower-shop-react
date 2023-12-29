import React from 'react';
import "./Product.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Product = (props) => {

    const {price,img,name}=props.product;
    
    const handleAddToCart=props.handleAddToCart;






    return (
        <div>

            <div className="product-container">
                <Card style={{ width: '18rem',height: '500px'  }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price:${price}
                            
                        </Card.Text>
                        <Button variant="primary"
                        onClick={()=>handleAddToCart(props.product)}
                        >Add to Cart</Button>
                    </Card.Body>
                </Card>


            </div>



        </div>
    );
};

export default Product;