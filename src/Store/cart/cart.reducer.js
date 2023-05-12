import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    cartItems:[],
    isCartOpen:false
}

export default function CartReducer(state=CART_INITIAL_STATE, action) {
    const { type, payload } = action;
    const { isCartOpen } = state;
    switch (type) {
        case CART_ACTION_TYPES.EDIT_CART:
            return { ...state,cartItems:payload };
        case CART_ACTION_TYPES.TOGGLE_CART:
            return { ...state, isCartOpen: !isCartOpen };
        default:
            return state;
    }
}