import { useContext } from "react";
import { ProductContext } from "../../Contexts/product";
import Card from "../../components/Card/card";
import './shop.scss';
const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="products-container">
            {products.map(product => <Card key={product.id} product={product} />)}
        </div>
    );
};
export default Shop;