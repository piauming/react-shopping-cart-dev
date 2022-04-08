import { createStore } from "redux";
import reducer from "./Reducer";
import { saveState, loadState } from "../Helper";
import { isEmpty, throttle } from "lodash";

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(throttle (() => {
        saveState({
            cart: store.getState().cart
        });
}, 1000));

export default store;