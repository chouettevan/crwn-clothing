import {Product} from '../products/products.types'
export enum CART_ACTION_TYPES  {
    EDIT_CART = "cart/EDIT_CART",
    TOGGLE_CART = "cart/TOGGLE_CART",
};

export type CartItem = Product & {
    quantity:number;
}