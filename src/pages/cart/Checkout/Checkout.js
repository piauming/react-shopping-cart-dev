import { useDispatch } from 'react-redux';
import { toDecimalPlace } from '../../../util/Helper';

const Checkout = ({cart}) => {
    let total = 0;
    Object.getOwnPropertyNames(cart).map(id => {
        const item = cart[id];
        total += item.qty * item.price;
    });

    total = toDecimalPlace(total.toString(), 2);

    return(
        <div>
        {
            Object.getOwnPropertyNames(cart).length > 0 &&  
            <div className="footer-tr">
              <div className="td"/>
              <div className="td"/>
              <div className="td"/>
              <div className="td">
                <div className='checkout'>
                  <h2>${total}</h2>
                  <button>Checkout</button>
                </div>
              </div>
            </div>

        }
        </div>
    );
}

export default Checkout;


