import Card from '../Card/card';
import Spinner from '../../Spinner/spinner'
import { ProductsContainer } from './styles';
import {Product} from '../../../Store/products/products.types';
/**
 * Displays the given products ,
 * and if given a max param,
 * limits the number of items to the specified max
 * */ 
type Props = {
    products?:Product[],
    max?:number
}
const Container = ({ products,max}:Props) => {
    if (!products) return <Spinner/>;
    if (max) {
        products = products.filter((_,idx) => idx < max)
    }
    return (
        <ProductsContainer>
            {
            products.map(product => <Card key={product.id} product={product}/>)
            }
        </ProductsContainer>
    );
};
export default Container;
