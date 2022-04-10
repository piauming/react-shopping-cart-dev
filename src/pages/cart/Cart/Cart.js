import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import QtyControl from './../QtyControl/QtyControl';
import Checkout from './../Checkout/Checkout';
import { removeFromCart } from '../../../redux/actions';

import { toDecimalPlace } from '../../../util/Helper';
import './Cart.css';


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => { return state.cart});

  const removeProduct = (productId) => {
    dispatch(removeFromCart(productId));
  }

  return (
    <div className='container'>
      {
        Object.getOwnPropertyNames(cart).length === 0 &&  
          <div className='no-items'>
            <h4>There are no items in your cart.</h4>
          </div>
      }

                <div className="table">
                    {
                        Object.getOwnPropertyNames(cart).map(id => 
        
                            <div key={`product-${id}`} className="tr">
                                <div className="td">
                                    <img className="photo" src={cart[id].image} alt="new"/>
                                  </div>
                                <div className="td">
                                  <div className='title'> {cart[id].title}</div>
                                </div>
                                <div className="td">
                                  <QtyControl id={id} qty={cart[id].qty}/>
                                </div>
                                <div className="td">
                                  <div className='price-del'>
                                    <p>${toDecimalPlace(cart[id].price, 2)}</p>
                                    <div className='delete-item' onClick={()=>removeProduct(id)}>remove</div>
                                  </div>

                                </div>
                            </div>
                        )


                    }

                   <Checkout cart={cart} />
                </div>
                </div>

  );
}

export default Cart;
