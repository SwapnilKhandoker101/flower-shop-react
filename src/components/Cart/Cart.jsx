import React from 'react';
import "./Cart.css"
import CartItem from '../CartItem/CartItem';
import { removeFromDb } from '../../utilities/fakedb';

const Cart = (props) => {
    const {cart}=props
    let total=0
    let total_quantity=0

    for (const product of cart){
        total=product.price*product.quantity+total 

    }

    const handleDeleteCart=(product)=>{
        removeFromDb(product.id)
    }

    return (
        <div className='cart'>
            <div className="selected-items">
                {
                    cart.map(product=><CartItem
                    key={product.id}
                    product={product}
                    handleDeleteCart={handleDeleteCart}
                    
                    >

                    </CartItem>)
                }

            </div>
            <p>Total: {total} </p>
             
      

            
        </div>
    );
};

export default Cart;