const removeFromCart = (productId) => ({
    type: "removeFromCart",
    payload: {id: productId}
});

export default removeFromCart;