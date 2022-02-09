import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";
import {
    selectCartItems,
    selectCartItemsTotal,
} from "../../redux/selectors/cart-selector";

import "../checkout/checkout-page.scss";

const CheckoutPage = ({ cartItems, totalValue }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Producto</span>
                </div>
                <div className="header-block">
                    <span>Descripcion</span>
                </div>
                <div className="header-block">
                    <span>Cantidad</span>
                </div>
                <div className="header-block">
                    <span>Precio</span>
                </div>
                <div className="header-block">
                    <span>Remover</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
            ))}
            <div className="total">
                <span>Total: ${totalValue}</span>
            </div>
            <div className="test-warning">
                *Usar el siguiente número de prueba para los pagos con tarjeta
                de crédito*
                <br />
                4242 4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
            </div>
            <StripeButton price={totalValue} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
