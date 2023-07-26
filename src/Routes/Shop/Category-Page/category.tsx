import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../../Components/Products/Container/container";
import { CategoryTitle as Title } from "./styles";
import Spinner from '../../../Components/Spinner/spinner';
import { useSelector } from "react-redux";
import { isLoadingSelector, productListSelector } from "../../../Store/products/products.selectors";

type CategoryRouteParams = {
    category:string
}


const CategoryPage  =  () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const productList  = useSelector(productListSelector);
    const isLoading = useSelector(isLoadingSelector);
    const [ products,setProducts ] = useState(productList[category || 'hats']);
    useEffect(() => {
        setProducts(productList[category || 'hats'])
    },[category,productList]);
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