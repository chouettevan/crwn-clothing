import { all,call } from 'typed-redux-saga';
import productsSaga from './products/products.sagas';
export default function* rootSaga() {
    yield* all([call(productsSaga)]);
};