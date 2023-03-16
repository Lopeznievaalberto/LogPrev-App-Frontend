import { useState } from 'react'

import './App.css'





import './App.css'
import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}
export default App



// import { configureStore } from '@reduxjs/toolkit';
// import userSlice from '../pages/User/userSlice';
// // import serieSlice from '../pages/serieSlice';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';

// import thunk from 'redux-thunk';

// const reducers = combineReducers({
//     user: userSlice,
//     // serie: serieSlice
// })

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//     reducer: persistedReducer,
//     middleware: [thunk]
// });