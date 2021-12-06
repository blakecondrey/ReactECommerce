import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K3ZCjJ8Ezj5dotcUgjelPX7r4f37mZCkFg0jW5mRW5D38w7ifMLaoc8bpU23A34dIElfacCmO7Gbh856fFpWZSS0032oOED2d';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    };

    return (
        <StripeCheckout
            label='Buy The Stuff'
            name='CRWNFiT Ltd.'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Spot me $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;