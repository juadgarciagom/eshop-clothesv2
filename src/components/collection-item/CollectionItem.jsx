import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/CustomButton";

import { addItem } from "../../redux/actions/CartActions";

import '../collection-item/collection-item.scss'

const CollectionItem = ({ item, addItem }) => {
    
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <CustomButton shopButton onClick={() => addItem(item)} >Lo quiero!</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
