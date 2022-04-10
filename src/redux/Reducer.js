import initialState from "./InitialState";
import { addToCart, minusFromCart, removeFromCart, checkoutCart } from "./reducers";

// reducer function
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "addToCart":
            return addToCart(state, action.payload);
        case "minusFromCart":
            return minusFromCart(state, action.payload);
        case "removeFromCart":
            return removeFromCart(state, action.payload);
        case "checkoutCart":
            return checkoutCart(state, action.payload);
        default:
            return state;
    }
}

export default reducer;