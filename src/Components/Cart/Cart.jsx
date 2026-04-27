import React from 'react';
import NoData from '../NoData/NoData';

const Cart = ({setAddedcart, addedCart}) => {

    console.log(addedCart)
    return (
        <div>
            {
              addedCart.length===0?
              <NoData></NoData> :
              <h1>There is Data</h1>
            }
            
        </div>
    );
};

export default Cart;