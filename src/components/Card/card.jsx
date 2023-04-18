import './card.scss';
import Button from '../Button/button'
const Card = ({ product:{name,price,imageUrl} }) => {
    return (
        <div className='card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button className='inverted '>Add to Card</Button>
        </div>
    );
};
export default Card;