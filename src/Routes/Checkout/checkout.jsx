import { CartContext } from "../../Contexts/cart";
import { useContext, useEffect, useState } from "react";
import Item from "../../Components/Checkout-item/item";
import { CheckoutPage,Header,Cart } from "./styles";
const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [ price,setPrice ] = useState(0);
    useEffect(() => {
        let newPrice = 0;
        for (let i of cartItems) {
            newPrice += i.quantity * i.price;
        }
        setPrice(newPrice);
    },[cartItems]);
    return (
        <CheckoutPage >
            <Header>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </Header>
            <Cart>
                {cartItems.map(product => <Item product={product}/>)}
            </Cart>
            {price ? <h2>total:{price}$</h2> : null}
        </CheckoutPage>
    );
};
export default Checkout;