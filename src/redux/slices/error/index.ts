import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CustomError } from 'global.types'
import { RootState } from 'redux/store'

type ErrorAction = {
  message: CustomError['message']
}

const initialState: CustomError = {
  isError: false,
  message: '',
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    showError: (state, { payload }: PayloadAction<ErrorAction>) => {
      state.message = payload.message
      state.isError = true
    },
    resetError: (state) => {
      state.message = initialState.message
      state.isError = initialState.isError
    },
  },
})

export const { resetError, showError } = errorSlice.actions

export const selectError = (state: RootState) => state.error

export default errorSlice.reducer
