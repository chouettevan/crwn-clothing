import { useSelector } from "react-redux";
import { cartItemsSelector,totalPriceSelector } from "../../Store/cart/cart.selectors";
import Item from "../../Components/Checkout-item/item";
import { CheckoutPage,Header,Cart } from "./styles";
const Checkout = () => {
    const cartItems = useSelector(cartItemsSelector);
    const price = useSelector(totalPriceSelector)
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
                {cartItems.map(product => <Item product={product} key={product.id}/>)}
            </Cart>
            {price ? <h2>total:{price}$</h2> : null}
        </CheckoutPage>
    );
};
export default Checkout;