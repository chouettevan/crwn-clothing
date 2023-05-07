import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../../Components/Products/Container/container";
import { CategoryTitle as Title } from "./styles";
import { useSelector } from "react-redux";
import { productListSelector } from "../../../Store/products/products.selectors";
const CategoryPage  =  () => {
    const { category } = useParams();
    const productList  = useSelector(productListSelector);
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