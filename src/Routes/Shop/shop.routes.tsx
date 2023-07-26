import { Route,Routes } from "react-router-dom";
import MainPage from "./Main/shop";
import CategoryPage from "./Category-Page/category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsStart } from "../../Store/products/products.action";
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsStart());
    },[dispatch]);
    return (
        <Routes>
            <Route path='' element={<MainPage/>}/>
            <Route path=':category' element={<CategoryPage/>}/>
        </Routes>
    );
}
export default Shop;