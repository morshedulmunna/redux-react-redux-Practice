import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/actions/cartAction';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h3>This is cart</h3>
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId} >{pd.name}
                        <button onClick={() => removeFromCart(pd.cartId)}>Remove</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);