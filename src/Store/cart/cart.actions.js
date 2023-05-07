import createAction from "../../Utils/Reducer/reducer";
import { CART_ACTION_TYPES } from "./cart.types";

export const addItemToCart = item => 
createAction(CART_ACTION_TYPES.ADD_ITEM,item);

export const removeItemFromCart = item => 
createAction(CART_ACTION_TYPES.REMOVE_ITEM,item);

export const deleteCartItem =  item => 
createAction(CART_ACTION_TYPES.DELETE_ITEM,item);

export const toggleCart = () => 
createAction(CART_ACTION_TYPES.TOGGLE_CART);