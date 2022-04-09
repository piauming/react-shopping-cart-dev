import produce from "immer";

// payload = {id, qyt}
const addToCart = (state, payload) => {
    return produce(state, draftState => {
            if (draftState.cart[payload.id]) {
                let p = draftState.cart[payload.id];
                p.qty = p.qty + payload.qty;
                return;
            }

            draftState.cart[payload.id] = payload;
    });
}

export default addToCart;