import { CartContext } from "../../Contexts/cart";
import { useContext } from "react";
import Item from "../../Components/Checkout-item/item";
import { CheckoutPage,Header,Cart } from "./styles";
const Checkout = () => {
    const { totalPrice,cartItems } = useContext(CartContext);
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
            {totalPrice ? <h2>total:{totalPrice}$</h2> : null}
        </CheckoutPage>
    );
};
export default Checkout;