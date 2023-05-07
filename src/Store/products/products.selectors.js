import { createSelector } from 'reselect';
const selectProductReducer = state => state.products
const selectProducts = createSelector(
    [selectProductReducer],
    (data) => data.products 
)
export const productListSelector = createSelector(
    [selectProducts],
    state => state.reduce((acc,product) => {
        const { title,items } = product;
        acc[title.toLowerCase()] = items;
        return acc;
    },{})
)



