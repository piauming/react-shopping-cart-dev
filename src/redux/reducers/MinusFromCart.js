import produce from "immer";

// payload = {id, qyt}
const minusFromCart = (state, payload) => {
    return produce(state, draftState => {
            if (draftState.cart[payload.id]) {
                let p = draftState.cart[payload.id];
                p.qty = p.qty - payload.qty;

                if (p.qty === 0) {
                    delete draftState.cart[payload.id];
                }

                return;
            }

    });
}

export default minusFromCart;