const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartAction");

const initialState = {

    cart: [],
    products: [
        { name: 'Lenovo', id: '1' },
        { name: 'Samsung', id: '2' },
        { name: 'Dell', id: '3' },
        { name: 'Hp', id: '4' },
        { name: 'Apple', id: '5' }
    ]
}


const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            return {
                ...state,
                cart: [...state.cart, newItem],}
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.cartId !== action.id)
            };
        default:
            return state;
    }
}

export default cartReducers;




