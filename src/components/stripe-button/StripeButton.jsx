import React from "react";
import StripeCheckout from "react-stripe-checkout";

//In order to manage the price to the stripe platform we need to convert the price from dollars to cents that is made with the const priceForStripe
const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = "pk_test_51KQjvpBLIfMKNcb0yf0hOIStSYpnLT88A8bgojuDZnISLJQukvV9TlxsiE4gbhmI88IjvYn7kqHciHNApXUmniwc00xtk5GOqG";
    const onToken = token => {
        alert('Pago exitoso')
    }
    return (
        //StripeCheckout is a component from stripe library with differents properties look in github repo

        <StripeCheckout
            label="Pagar ahora"
            name=""
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Tu cuenta es ${price}`}
            amount={priceForStripe}
            panelLabel='Pagar ahora'
            token={onToken}
            stripeKey={publicKey}
        />
    );
};

export default StripeButton;
