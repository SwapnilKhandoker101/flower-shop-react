import React from 'react';
import "./CartItem.css"

const CartItem = (props) => {
    const { id,price, img, name,quantity } = props.product;
    const handleDeleteCart=props.handleDeleteCart


    return (
        <div className='item-container'>
            <div className='item'>
                <img src={img} alt="" />
                  <div><h6>{name} </h6></div>
                  <div><h6>${price}</h6></div>
                  <div><h6>Quantity:{quantity}</h6></div>
                    
                    
               
                <div><button className='btn-delete' onClick={()=>handleDeleteCart(id)}>Delete</button></div>
            </div>

        </div>
    );
};

export default CartItem;