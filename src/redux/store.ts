import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Reducers here...
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { reducers... }
export type AppDispatch = typeof store.dispatch
