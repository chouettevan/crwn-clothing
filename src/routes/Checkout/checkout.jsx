import { CartContext } from "../../Contexts/cart";
import { useContext,useEffect,useState } from "react";
import './checkout.scss';
import Item from "../../components/Checkout-element/element";
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
        <div className="checkout">
            <div className="header">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <div className="cart">
                {cartItems.map(product => <Item product={product}/>)}
            </div>
            {total ? <h2>total:{total}$</h2> : null}
        </div>
    );
};
export default Checkout;