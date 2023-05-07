import createAction from "../../Utils/Reducer/reducer";
import { PRODUCTS_ACTION_TYPES } from "./products.types";
export const setProducts = products => 
createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS,products);