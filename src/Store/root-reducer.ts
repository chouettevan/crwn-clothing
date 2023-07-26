import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productsReducer} from "./products/products.reducer";
import {CartReducer} from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    products : productsReducer,
    cart:CartReducer,
});

