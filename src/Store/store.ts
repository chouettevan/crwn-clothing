import { compose,createStore,applyMiddleware,Middleware } from "redux";
import { persistStore,persistReducer,PersistConfig } from 'redux-persist';
import storage  from 'redux-persist/lib/storage'
import { loggerMiddleware as logger } from './middlewares/logger';
import { rootReducer} from "./root-reducer";
import rootSaga from "./root-saga";
import createSagaMiddleware from "redux-saga";

export type RootState = ReturnType<typeof rootReducer>

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist:(keyof RootState)[]
}

const persistConfig:ExtendedPersistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const sagaMiddleware = createSagaMiddleware();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE?:typeof compose
    }
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleWares = [
    process.env.NODE_ENV !== 'production'
    && logger 
    ,sagaMiddleware].filter((e:Middleware<{},RootState>|false):e is Middleware<{},RootState> => Boolean(e));

const composeEnhancers = 
    (process.env.NODE_ENV !== 'production' 
    && window
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE )
    || compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer,undefined,composedEnhancers);

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);
