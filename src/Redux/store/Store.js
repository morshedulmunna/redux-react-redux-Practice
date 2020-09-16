const { createStore } = require("redux");
const { default: cartReducers } = require("../reducers/cartReducer");

const store = createStore(cartReducers)

export default store;