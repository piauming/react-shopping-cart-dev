import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import QtyControl from './QtyControl';
import { removeFromCart } from '../../redux/actions';
import './Cart.css';

const toDecimalPlace = (numString, unit) => {
  const num = Number(numString);
  return (Math.round(num * 100) / 100).toFixed(unit);
}

const EmptyRow = () => {
  return (
    <div className="tr">
    <div className="td"/>
    <div className="td"/>
    <div className="td"/>
    <div className="td"/>
    </div>
  )
}

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => { return state.cart});

  const removeProduct = (productId) => {
    dispatch(removeFromCart(productId));
  }

  return (
    <div className='container'>
                <div className="table">
                    <EmptyRow/>
                    {
                        Object.keys(cart).map(id => 
        
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


                            <div className="footer-tr">
                                <div className="td"/>
                                <div className="td"/>
                                <div className="td"/>
                                <div className="td">
                                  <div className='checkout'>
                                    <h2>$100.90</h2>
                                    <button>Checkout</button>
                                  </div>
                                </div>
                            </div>
                </div>
                </div>

  );
}

export default Cart;
