import Card from '../Card/card';
import { ProductsContainer } from './styles';
/**
 * Displays the given products ,
 * and if given a max param,
 * limits the number of items to the specified max
 * */ 

const Container = ({ products,max }) => {
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
