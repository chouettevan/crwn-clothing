import { createAction,Action,ActionWithPayload,withMatcher } from "../../Utils/Reducer/reducer";
import { PRODUCTS_ACTION_TYPES,Category } from "./products.types";

export type FetchProductsStart = 
	Action<PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START>

export type FetchProductsSuccess = 
	ActionWithPayload<PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,Category[]>

export type FetchProductsFailed = 
	ActionWithPayload<PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED,Error>


export const fetchProductsStart = withMatcher( 
	():FetchProductsStart =>
	createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START)
);

export const fetchProductsSuccess = withMatcher(
	(products:Category[]):FetchProductsSuccess => 
	createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,products)
);

export const fetchProductsFailed = withMatcher(
	(error:Error):FetchProductsFailed =>
	createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED,error)
);