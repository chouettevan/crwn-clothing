import { createContext,useState } from "react";
export const CartContext = createContext({
    cartItems:[],
    addItemToCart:() => {},
    isCartOpen:false,
    setIsCartOpen:() => {},
    updateItemCount:() => {},
    removeItem:() => {}
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
    const addItemToCart = cartItem => {
        setCartItems(addCartItem(cartItems,cartItem));
    };
    const updateItemCount = (item,countUpdate) => {
        if (item.quantity + countUpdate <= 0) {
            removeItem(item);
            return;
        }
        setCartItems(cartItems.map(element => 
            item.id === element.id & item.quantity > -countUpdate
            ? {...element,quantity:element.quantity + countUpdate}
            : element
        ))
    }
    const removeItem = item => {
        setCartItems(cartItems.filter(element => element.id !== item.id));
    }
    const value = { cartItems,addItemToCart,isCartOpen,setIsCartOpen,updateItemCount,removeItem };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};