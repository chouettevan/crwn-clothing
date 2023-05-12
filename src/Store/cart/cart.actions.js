import createAction from "../../Utils/Reducer/reducer";
import { CART_ACTION_TYPES } from "./cart.types";
export const addItemToCart = (cart,itemToAdd) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemToAdd.id);
    let newCart = [];
    if (existingItem) {
        console.log(existingItem);
        newCart = cart.map(item => 
            item.id === itemToAdd.id 
            ? {...item,quantity:item.quantity+1}
            : item
            );
    } else {
        newCart =  [...cart,{...itemToAdd,quantity:1}];
    }
    return createAction(CART_ACTION_TYPES.EDIT_CART,newCart);
}

export const removeItemFromCart = (cart,item) => {
    let newCart = [];
    if ( item.quantity === 1) {
        newCart = cart.filter(cartItem => cartItem.id !== item.id);
    } else {
        newCart = cart.map(cartItem => 
            cartItem.id === item.id ?
            {...item,quantity:item.quantity - 1}
            : cartItem
            )
    }
    return createAction(CART_ACTION_TYPES.EDIT_CART,newCart)
}

export const deleteCartItem =  (cart,item) => 
createAction(CART_ACTION_TYPES.EDIT_CART,
    cart.filter(cartItem => cartItem.id !== item.id));

export const toggleCart = () => 
createAction(CART_ACTION_TYPES.TOGGLE_CART);