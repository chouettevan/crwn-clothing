import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../../Components/Products/Container/container";
import { CategoryTitle as Title } from "./styles";
import Spinner from '../../../Components/Spinner/spinner';
import { useSelector } from "react-redux";
import { isLoadingSelector, productListSelector } from "../../../Store/products/products.selectors";
const CategoryPage  =  () => {
    const { category } = useParams();
    const productList  = useSelector(productListSelector);
    const isLoading = useSelector(isLoadingSelector);
    const [ products,setProducts ] = useState(productList[category]);
    useEffect(() => {
        setProducts(productList[category])
    },[category,productList]);
    if (!products) return;
    return (
       <div>
            <Title>{category}</Title>
        {
         isLoading 
         ?   <Spinner/>
         :   <Container products={products}/>
        }
        </div>
    );
};
export default CategoryPage;