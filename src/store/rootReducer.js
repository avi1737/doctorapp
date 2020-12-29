import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loginReducer } from '../reducer/loginReducer';
import { signupReducer } from '../reducer/signupReducer';

const persistConfig = {
  key:'root',
  storage:storage,
  whitelist:['login']
}

export const rootReducer = combineReducers({
    login:loginReducer,
    signup:signupReducer
});
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;