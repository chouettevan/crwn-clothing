import { CART_ACTION_TYPES } from "./cart.types";

function addCartItem(cart,itemToAdd) {
    const existingItem = cart.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingItem) {
        console.log(existingItem);
        return cart.map(item => 
            item.id === itemToAdd.id 
            ? {...item,quantity:item.quantity+1}
            : item
            );
    }

    return [...cart,{...itemToAdd,quantity:1}];
}

function removeItem(cart,item) {
    if ( item.quantity === 1) {
        return cart.filter(cartItem => cartItem.id !== item.id);
    } else {
        return cart.map(cartItem => 
            cartItem.id === item.id ?
            {...item,quantity:item.quantity - 1}
            : cartItem
            )
    }
}

const CART_INITIAL_STATE = {
    cartItems:[],
    isCartOpen:false
}

export default function CartReducer(state=CART_INITIAL_STATE, action) {
    const { type, payload } = action;
    const { cartItems,isCartOpen } = state;
    switch (type) {
        case CART_ACTION_TYPES.ADD_ITEM:
            return { ...state, cartItems: addCartItem(cartItems, payload) };
        case CART_ACTION_TYPES.REMOVE_ITEM:
            return { ...state, cartItems: removeItem(cartItems, payload) };
        case CART_ACTION_TYPES.DELETE_ITEM:
            return { ...state, cartItems: cartItems.filter(item => item.id !== payload.id) };
        case CART_ACTION_TYPES.TOGGLE_CART:
            return { ...state, isCartOpen: !isCartOpen };
        default:
            return state;
    }
}