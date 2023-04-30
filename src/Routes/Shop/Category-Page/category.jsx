import { useContext } from "react";
import { ProductContext } from "../../../Contexts/product"; 
import { useParams } from "react-router-dom";
import Container from "../../../Components/Products/Container/container";
import { CategoryTitle as Title } from "./styles";
const CategoryPage  =  () => {
    const { category } = useParams();
    const products  = useContext(ProductContext).products;
    if (!products) return;
    return (
       <div>
            <Title>{category}</Title>
            <Container products={products[category]}/>
        </div>
    );
};
export default CategoryPage;