import React from "react";
import { connect } from "react-redux";

import { setCartHidden } from "../../redux/actions/CartActions";
import { selectCartItemsCount } from "../../redux/selectors/cart-selector";

import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";

import "../cart-icon/cart-icon.scss";

const CartIcon = ({ setCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={setCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    setCartHidden: () => dispatch(setCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
