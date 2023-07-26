import {CartState} from './cart.reducer';
import {createSelector} from 'reselect';
import { RootState } from '../store';

const selectCartState = (state:RootState):CartState => state.cart

export const cartItemsSelector = createSelector(
    [selectCartState],
    cartState => cartState.cartItems
)
export const isCartOpenSelector = createSelector(
    [selectCartState],
    cartState => cartState.isCartOpen
)

export const cartCountSelector = createSelector(
    [cartItemsSelector],
    cart => 
    cart.reduce((acc,item) => acc + item.quantity,0)
)
export const totalPriceSelector = createSelector(
    [cartItemsSelector],
    cart => cart.reduce(
        (acc,item) => acc + item.quantity*item.price,0)
)