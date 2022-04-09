import { useSelector, useDispatch } from 'react-redux';

const getItemsInCart = (cart) => {
    let count = 0;
    for (const id in cart) {
        count = count + cart[id].qty;

    }

    return count;
}

const CartButton = () => {
    const cart = useSelector((state) => { return state.cart});
    let count = getItemsInCart(cart);

    return(
        <div style={{display: "flex", flexDirection:"row"}}>
            <span>Cart {count} </span>
        </div>
    );

}

export default CartButton;