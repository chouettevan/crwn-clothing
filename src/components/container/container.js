
import Category from "../category/category";
import './container.css';
const Container = ({ categories }) => {
    return (
    <div className="categories-container">
        {categories.map(product => <Category category={product} key={product.id}/>)}
      </div>
    )
};
export default Container;
