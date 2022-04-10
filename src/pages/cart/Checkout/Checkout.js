import { useDispatch } from 'react-redux';
import { checkoutCart } from '../../../redux/actions';
import { toDecimalPlace } from '../../../util/Helper';

const Checkout = ({cart}) => {

    const dispatch = useDispatch();

    let total = 0;

    for (var id in cart) {
      if (cart.hasOwnProperty(id)) {
        const item = cart[id];
        total += item.qty * item.price;
      }
    }

    total = toDecimalPlace(total.toString(), 2);

    const checkout = () => {
      dispatch(checkoutCart());
    }

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
                  <h2 data-testid="total">${total}</h2>
                  <button onClick={checkout}>Checkout</button>
                </div>
              </div>
            </div>

        }
        </div>
    );
}

export default Checkout;


