import createAction from "../../Utils/Reducer/reducer";
import { PRODUCTS_ACTION_TYPES } from "./products.types";

export const fetchProductsStart = () =>
createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = products => 
createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,products)

export const fetchProductsFailed = error =>
createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED,error);
