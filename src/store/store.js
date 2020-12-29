import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import persistedReducer from './rootReducer';
import {rootReducer} from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(persistedReducer,composeWithDevTools(
    applyMiddleware(thunk),
  ));
export const  persistor = persistStore(store);

