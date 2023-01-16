import { UserInfo } from 'global.types'
import { RootState } from 'redux/store'
import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  info: Partial<UserInfo>
}

type UserAction = {
  payload: UserInfo
}

const initialState: UserState = {
  info: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }: UserAction) => {
      console.log({ payload })
      state.info = payload
    },
    removeUserInfo: (state) => {
      state = initialState
    },
  },
})

export const { setUserInfo, removeUserInfo } = userSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserInfo = (state: RootState) => state.user.info

export default userSlice.reducer
