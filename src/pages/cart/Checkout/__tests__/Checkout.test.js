import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Checkout from './../Checkout';

describe('With React Testing Library', () => {
    // const initialState = { output: 10 };

    const cart = {
        "2": {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "category": "men's clothing",
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "qty": 2
        },
        "6": {
            "id": 6,
            "title": "Solid Gold Petite Micropave ",
            "price": 168,
            "category": "jewelery",
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            "qty": 1
        }
    }


    const mockStore = configureStore();
    let store;

    it("Checkout component renders without crashing", () => {
        store = mockStore(cart);

        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Checkout cart={cart}></Checkout>
            </Provider>, 
        div);
    });
});