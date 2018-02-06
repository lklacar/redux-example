import {applyMiddleware, createStore} from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "./reducers"
import {persistStore, persistReducer} from 'redux-persist'


import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
const middleware = applyMiddleware(promise(), thunk, logger());


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

// export default createStore(reducer, middleware)

let store = createStore(persistedReducer, middleware);
let persistor = persistStore(store);

export {store, persistor}