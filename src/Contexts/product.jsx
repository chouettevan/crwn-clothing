import { createContext,useState } from "react";
import PRODUCTS from '../shop-data.json';
export const ProductContext = createContext({
    products:[],
    setProducts:()=>null
});
export const ProductProvider = ({ children }) => {
    const [ products] = useState(PRODUCTS);
    const value = {products} 
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};