import { call,put,takeLatest } from "typed-redux-saga";
import { PRODUCTS_ACTION_TYPES } from "./products.types";
import { getProducts } from "../../Utils/Firebase/firebase";
import { fetchProductsSuccess,fetchProductsFailed } from "./products.action";

export function* fetchProducts() {
    try {
        const productsArray = yield* call(getProducts);
        yield* put(fetchProductsSuccess(productsArray));
    } catch (error) {
        yield* put(fetchProductsFailed(error as Error));
    }
}

export function* onProductsFetch() {
    yield* takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
        fetchProducts)
}

export default function* productsSaga() {
    yield* call(onProductsFetch);
}