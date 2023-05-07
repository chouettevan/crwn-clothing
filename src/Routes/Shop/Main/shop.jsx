import { Fragment } from "react";
import Container from "../../../Components/Products/Container/container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { productListSelector } from "../../../Store/products/products.selectors";
const MainPage = () => {
    const products = useSelector(productListSelector);
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

export default MainPage;