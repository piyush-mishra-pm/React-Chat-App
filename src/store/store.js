import { createStore, applyMiddleware, compose } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const persistConfig = { key: 'root', storage, stateReconciler: hardSet };
const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export const persistor = persistStore(store);
