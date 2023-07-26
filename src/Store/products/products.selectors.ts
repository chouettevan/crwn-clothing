import { createSelector } from 'reselect';
import {ProductsState} from './products.reducer'
import {CategoryMap} from './products.types';
import { RootState } from '../store'
const selectProductReducer = (state:RootState):ProductsState => state.products


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
    },{} as CategoryMap)
)

export const isLoadingSelector = createSelector(
    [selectProductReducer],
    state => state.isLoading
)


