
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/User/userSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import testSlice from '../pages/testSlice';


const reducers = combineReducers({
    user: userSlice,
    test: testSlice
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});












 