import { CartItem } from "./cart.types";
import { setCartItems,toggleCart } from './cart.actions';
import {AnyAction} from 'redux';

export type CartState = {
    readonly cartItems:CartItem[],
    readonly isCartOpen:boolean
}

const CART_INITIAL_STATE:CartState = {
    cartItems:[],
    isCartOpen:false
}

export function CartReducer(state=CART_INITIAL_STATE, action:AnyAction):CartState {
    const { payload } = action;
    const { isCartOpen } = state;
	if (setCartItems.match(action)) {
        return { ...state,cartItems:payload };
    }
    if (toggleCart.match(action)) {
        return { ...state, isCartOpen: !isCartOpen };
    }
    return state;
}
