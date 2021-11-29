import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; 
import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon fill='#b3b3b3' stroke='white' className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

export default CartIcon;