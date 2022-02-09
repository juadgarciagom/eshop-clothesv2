import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import root from '../reducers/root-reducer';
//This configuration can be seeing in redux documentation
const middlewares = [logger];

export const store = createStore(root, applyMiddleware(...middlewares))
export const persistor = persistStore(store)