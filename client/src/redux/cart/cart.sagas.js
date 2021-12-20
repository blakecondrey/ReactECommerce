import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";
import CartActionTypes from "./cart.types";

export function* clearCartItems() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItems);
}

export function* onCheckoutSuccess() {
    yield takeLatest(CartActionTypes.CHECKOUT_SUCCESS, clearCartItems)
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess), call(onCheckoutSuccess)]);
}