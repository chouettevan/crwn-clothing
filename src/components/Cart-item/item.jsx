import './item.scss';
const CartItem = ({ product:{ name,quantity,imageUrl,price } }) => {
    return (
        <div className='item-container'>
            <img src={imageUrl} alt={name}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    );
};
export default CartItem;