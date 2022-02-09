import React from "react";

import "../custom-button/custom-button.scss";

const CustomButton = ({
    children,
    isGoogleSignIn,
    shopButton,
    ...otherProps
}) => {
    return (
        <button
            className={`${shopButton ? "shop-button" : ""} ${
                isGoogleSignIn ? "google-sign-in" : ""
            } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
