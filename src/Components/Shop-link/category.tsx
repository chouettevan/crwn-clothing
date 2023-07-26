import {
    CategoryLink,
    BackgroundImage,
    BodyContainer
} from './styles'

type ShopLinkProps = {
    category:{
        title:string,
        imageUrl:string,
        id:number
    }
}

const Category = ({ category:{ title,imageUrl} }:ShopLinkProps) => {
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