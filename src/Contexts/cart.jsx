import { createContext,useState,useReducer } from "react";
export const CartContext = createContext({
    cartItems:[],
    isCartOpen:false,
    setIsCartOpen:() => {},
});
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
export const ACTION_TYPES = {
    add_item:"ADD_ITEM",
    remove_item:"REMOVE_ITEM",
    delete_item:"DELETE_ITEM"
}
const CartReducer = (state,action) => {
    const { type,payload } = action;
    const { cartItems } = state;
    switch (type) {
        case "ADD_ITEM":
            return { cartItems:addCartItem(cartItems,payload) };
        case "REMOVE_ITEM":
            return { cartItems:removeItem(cartItems,payload) };
        case "DELETE_ITEM":
            return { cartItems:cartItems.filter(item => item.id !== payload.id) };
        default:
            throw new Error(`unhandled action type ${type} in Cart Reducer`);
    }
};
export const CartProvider = ({ children }) => {
    const [ { cartItems },dispatch ] = useReducer(CartReducer,{cartItems:[]});
    const [ isCartOpen,setIsCartOpen ] = useState(false);
    const value = { cartItems,isCartOpen,dispatch,setIsCartOpen };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};