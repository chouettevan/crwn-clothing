import { createContext,useEffect,useState } from "react";
import { getCategoriesAndDocuments } from "../Utils/Firebase/firebase";
export const ProductContext = createContext({
    products:[],
});
export const ProductProvider = ({ children }) => {
    const [ products,setProducts] = useState([]);
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setProducts(categoryMap);
        }
        getCategoriesMap();
    },[])
    const value = {products} 
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};