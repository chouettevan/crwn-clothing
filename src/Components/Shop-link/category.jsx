import {
    CategoryLink,
    BackgroundImage,
    BodyContainer
} from './styles'
const Category = ({ category:{ title,imageUrl} }) => {
    return (
    <CategoryLink to={`/shop/${title}`} >
        <BackgroundImage imageUrl={imageUrl}>
        </BackgroundImage>
        <BodyContainer >
            <h2>{title}</h2>
            <p>Shop Now</p>
        </BodyContainer>
    </CategoryLink>
    );
};
export default Category;