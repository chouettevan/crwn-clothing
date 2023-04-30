import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../Contexts/product"; 
import { useParams } from "react-router-dom";
import Container from "../../../Components/Products/Container/container";
import { CategoryTitle as Title } from "./styles";
const CategoryPage  =  () => {
    const { category } = useParams();
    const productList  = useContext(ProductContext).products;
    const [ products,setProducts ] = useState(productList[category]);
    useEffect(() => {
        setProducts(productList[category])
    },[category,productList]);
    if (!products) return;
    return (
       <div>
            <Title>{category}</Title>
            <Container products={products}/>
        </div>
    );
};
export default CategoryPage;