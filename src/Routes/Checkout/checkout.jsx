import { CartContext } from "../../Contexts/cart";
import { useContext,useEffect,useState } from "react";
import Item from "../../Components/Checkout-item/item";
import { CheckoutPage,Header,Cart } from "./styles";
const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [ total,setTotal ] = useState(0);
    useEffect(() => {
        let newTotal = 0;
        for (let i of cartItems) {
            newTotal += i.quantity * i.price;
        }
        setTotal(newTotal);
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
            {total ? <h2>total:{total}$</h2> : null}
        </CheckoutPage>
    );
};
export default Checkout;