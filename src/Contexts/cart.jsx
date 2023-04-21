import { createContext,useState,useEffect } from "react";
export const CartContext = createContext({
    cartItems:[],
    addItemToCart:() => {},
    isCartOpen:false,
    setIsCartOpen:() => {}
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
export const CartProvider = ({ children }) => {
    const [ cartItems,setCartItems ] = useState([]);
    const [ isCartOpen,setIsCartOpen ] = useState(false);
    useEffect(() => {
        console.log(cartItems);
    },[cartItems]);
    const addItemToCart = cartItem => {
        setCartItems(addCartItem(cartItems,cartItem));
    };
    const value = { cartItems,addItemToCart,isCartOpen,setIsCartOpen };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};