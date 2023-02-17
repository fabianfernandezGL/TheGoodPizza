import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'redux/store'

type LoadingAction = {
  isLoading: boolean
}

type LoadingState = {
  isLoading: boolean
}

const initialState: LoadingState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<LoadingAction>) => {
      state.isLoading = payload.isLoading
    },
  },
})

export const { setLoading } = loadingSlice.actions

export const selectLoading = (state: RootState) => state.info.isLoading

export default loadingSlice.reducer
