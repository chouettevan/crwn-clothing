import { all,call } from 'redux-saga/effects';
import productsSaga from './products/products.sagas';
export default function* rootSaga() {
    yield all([
        call(productsSaga),
        
    ]);
};