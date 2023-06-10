import { compose,createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore,persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage'
import { rootReducer } from "./root-reducer";
import rootSaga from "./root-saga";
import createSagaMiddleware from "redux-saga";
const persistConfig = {
    key:'root',
    storage,
    blacklist:['user']
}
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger,sagaMiddleware].filter(Boolean);

const composeEnhancers = (
    process.env.NODE_ENV !== 'production'
    && window
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer,undefined,composedEnhancers);

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);