import React from "react";

import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
    NameSpan
} from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameSpan>{name}</NameSpan>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;