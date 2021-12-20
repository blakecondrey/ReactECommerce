import React from "react";
import { connect } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/crown.svg';
import axios from 'axios';
import { checkoutSuccess } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, checkoutSuccess }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K3ZCjJ8Ezj5dotcUgjelPX7r4f37mZCkFg0jW5mRW5D38w7ifMLaoc8bpU23A34dIElfacCmO7Gbh856fFpWZSS0032oOED2d';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response => {
                alert('Payment Successful!');
                checkoutSuccess();
        })
            .catch(error => {
                console.log('Payment error: ', error);
                alert(
                    'There was an issue with your payment. Use provided TEST Credit Card'
                );
        });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWNFiT Ltd.'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Total: $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = (dispatch) => ({
    checkoutSuccess: () => dispatch(checkoutSuccess()),
});

export default connect(
    null,
    mapDispatchToProps
    )(StripeCheckoutButton);