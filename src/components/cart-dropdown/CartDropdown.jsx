import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import { selectCartItems } from "../../redux/selectors/cart-selector";
import { setCartHidden } from "../../redux/actions/CartActions";

import "../cart-dropdown/cart-dropdown.scss";

const CartDropdown = ({ cartItems, history, setCartHidden }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">El carrito está vacio</span>
                )}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                setCartHidden()
                }}>Ir a pagar</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
    setCartHidden: () => dispatch(setCartHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
