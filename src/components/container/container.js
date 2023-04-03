import { categories } from "../../App";
import Category from "../category/category";
import './container.css';
const Container = () => {
    return (
    <div className="Categories">
        {categories.map(product => <Category category={product} key={product.id}/>)}
      </div>
    )
};
export default Container;
