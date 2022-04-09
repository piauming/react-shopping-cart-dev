import produce from "immer";

// payload = product id
const removeFromCart = (state, payload) => {
    return produce(state, draftState => {
            if (draftState.cart[payload.id]) {
                delete draftState.cart[payload.id];
            }

    });
}

export default removeFromCart;