import { createContext,useState,useEffect } from "react";
import PRODUCTS from '../shop-data.json';
export const ProductContext = createContext({
    products:[],
    setProducts:()=>null
});
export const ProductProvider = ({ children }) => {
    const [ products,setProducts ] = useState(PRODUCTS);
    useEffect(() => {
        setProducts(products);
    },[products])
    const value = {products} 
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};