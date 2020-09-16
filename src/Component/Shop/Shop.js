import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    // console.log(props);
 const { products, addToCart} = props;
    return (
        <div>
            <h3>This is Shop</h3>
            {
                products.map ( pd => <Product 
                    product={pd} 
                    key={pd.id}
                    addToCart = {addToCart}
                ></Product> )
                
            }
        </div>
    );
};
// connecting Shop component to Redux
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// connect(mapStateToProps, mapDispatchToProps)(Shop);
export default connect(mapStateToProps, mapDispatchToProps)(Shop);