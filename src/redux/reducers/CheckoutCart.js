import produce from "immer";

// payload = product id
const checkoutCart = (state, payload) => {
    return produce(state, draftState => {
        draftState.cart = {}
    });
}

export default checkoutCart;