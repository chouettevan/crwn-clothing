import { Route,Routes } from "react-router-dom";
import MainPage from "./Main/shop";
import CategoryPage from "./Category-Page/category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../Store/products/products.action";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/firebase";
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setProducts(categoryMap));
        }
        getCategoriesMap();
      // eslint-disable-next-line
    },[]);
    return (
        <Routes>
            <Route path='' element={<MainPage/>}/>
            <Route path=':category' element={<CategoryPage/>}/>
        </Routes>
    );
}
export default Shop;