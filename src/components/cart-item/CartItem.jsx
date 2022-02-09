import React from "react";

import '../cart-item/cart-item.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <div className="price">
                    <p>{quantity}</p>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
