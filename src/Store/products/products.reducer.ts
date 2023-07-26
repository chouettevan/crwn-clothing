import { Category } from "./products.types";
import {fetchProductsStart,fetchProductsSuccess,fetchProductsFailed} from './products.action';
import {AnyAction} from 'redux';

export type ProductsState = {
    readonly products:Category[]
    readonly isLoading:boolean,
    readonly error:Error | null
}

export const PRODUCTS_INITIAL_STATE:ProductsState = {
    products:[],
    isLoading:false,
    error:null,
};


export const productsReducer = 
    (state=PRODUCTS_INITIAL_STATE,action={} as AnyAction):ProductsState => {
        if (fetchProductsStart.match(action)) {
            return {...state,isLoading:true}
        }
        
        if (fetchProductsSuccess.match(action)) {
            return {...state,isLoading:false,products:action.payload}
        }

        if (fetchProductsFailed.match(action)) {
            return {...state,isLoading:false,error:action.payload}
        }
        return state;
}
