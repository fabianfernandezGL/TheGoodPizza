import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import cartReducer from 'redux/slices/cart'
import userReducer from 'redux/slices/user'
import errorReducer from 'redux/slices/error'
import infoReducer from 'redux/slices/info'

const persistConfig = {
  key: 'theGoodPizzaPersist',
  storage,
}

const combinedReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
  reducer: { persistedReducer, error: errorReducer, info: infoReducer },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { reducers... }
export type AppDispatch = typeof store.dispatch
