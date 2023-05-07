import {createSelector} from 'reselect';

export const cartItemsSelector = state => 
state.cart.cartItems;

export const isCartOpenSelector = state => 
state.cart.isCartOpen;

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