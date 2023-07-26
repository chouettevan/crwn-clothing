import { createAction,withMatcher,ActionWithPayload,Action } from "../../Utils/Reducer/reducer";
import { CART_ACTION_TYPES } from "./cart.types";
import { CartItem } from './cart.types';
import { Product } from '../products/products.types';

export type EditCart = ActionWithPayload<CART_ACTION_TYPES.EDIT_CART,CartItem[]>

export const setCartItems = withMatcher(
    (cart:CartItem[]):EditCart => 
        createAction(CART_ACTION_TYPES.EDIT_CART,cart)
);

export const addItemToCart = 
    (cart:CartItem[],itemToAdd:Product):EditCart => {
        const existingItem = cart.find(cartItem => cartItem.id === itemToAdd.id);
        let newCart = [] as CartItem[];
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
        return setCartItems(newCart);
    }


export const removeItemFromCart = 
    (cart:CartItem[],item:CartItem):EditCart => {
        let newCart= [] as CartItem[];      
        if (!cart.find(i => i.id === item.id)) {
            newCart = [...cart];
        }
        else if (item.quantity === 1) {
            newCart = cart.filter(cartItem => cartItem.id !== item.id);
        } else {
            newCart = cart.map(cartItem => 
                cartItem.id === item.id ?
                {...item,quantity:item.quantity - 1}
                : cartItem
                )
        }
        return setCartItems(newCart)
    }


export const deleteCartItem = 
    (cart:CartItem[],item:CartItem):EditCart => 
    setCartItems(
        cart.filter(cartItem => cartItem.id !== item.id))


export type ToggleCart = Action<CART_ACTION_TYPES.TOGGLE_CART>

export const toggleCart = withMatcher(
    ():ToggleCart => 
    createAction(CART_ACTION_TYPES.TOGGLE_CART)
);

export const cleanUpCart = 
    () => 
    setCartItems([] as CartItem[])

