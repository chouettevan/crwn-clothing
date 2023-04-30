import { Fragment, useContext } from "react";
import { ProductContext } from "../../Contexts/product";
import Container from "../../Components/Products/Container/container";
import { Link } from "react-router-dom";
const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <>
            <div className="products-preview">
                {
                Object.keys(products).map(title => {
                    return (
                        <Fragment key={title}>
                            <Link to={`/shop/${title}`}>
                                <h2>{title}</h2>
                            </Link>
                            <Container products={products[title]} max={4}/>
                        </Fragment>
                    )})
                }
            </div>  
        </>
    
        );
};

export default Shop;