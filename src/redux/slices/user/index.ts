import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'redux/store'
import { clearTokens } from 'utils/tokenHelper'
import { Address, Payment, UserInfo } from 'global.types'

type UserState = {
  info: Partial<UserInfo> & {
    addresses: Array<Address>
    payments: Array<Payment>
  }
  isAuth: boolean
}

type UserAction = {
  userInfo: UserInfo
}

type AddressAction = {
  payload: {
    address: Address
    index: number
  }
}

type PaymentAction = {
  payload: {
    payment: Payment
    index: number
  }
}

const initialState: UserState = {
  info: {
    addresses: [],
    payments: [],
  },
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, { payload }: PayloadAction<UserAction>) => {
      state.info = payload.userInfo as UserInfo
      state.isAuth = true
    },
    logOut: (state) => {
      clearTokens()
      state.info = initialState.info
      state.isAuth = false
    },
    addAddress: (state, { payload }: AddressAction) => {
      const addresses = [...state.info.addresses]
      for (const address of addresses) {
        address.isDefault = false
      }
      state.info.addresses.push(payload.address)
    },
    removeAddress: (state, { payload }: AddressAction) => {
      const addresses = [
        ...state.info.addresses.filter(
          (address) =>
            address.name !== payload.address.name &&
            address.street1 !== payload.address.street1
        ),
      ]
      state.info.addresses = addresses
    },
    setDefaultAddress: (state, { payload }: AddressAction) => {
      const addresses = [...state.info.addresses]
      for (const address of addresses) {
        address.isDefault = false
      }
      addresses[payload.index].isDefault = true
      state.info.addresses = [...addresses]
    },
    addPayment: (state, { payload }: PaymentAction) => {
      const payments = [...state.info.payments]
      for (const payment of payments) {
        payment.isDefault = false
      }
      state.info.payments.push(payload.payment)
    },
    removePayment: (state, { payload }: PaymentAction) => {
      const payments = [
        ...state.info.payments.filter(
          (payment) => payment.cardNumber !== payload.payment.cardNumber
        ),
      ]
      state.info.payments = payments
    },
    setDefaultPayment: (state, { payload }: PaymentAction) => {
      const payments = [...state.info.payments]
      for (const payment of payments) {
        payment.isDefault = false
      }
      payments[payload.index].isDefault = true
      state.info.payments = [...payments]
    },
  },
})

export const {
  logIn,
  addAddress,
  removeAddress,
  setDefaultAddress,
  addPayment,
  removePayment,
  setDefaultPayment,
  logOut,
} = userSlice.actions

export const selectUserInfo = (state: RootState) => state.user.info
export const selectIsAuth = (state: RootState) => state.user.isAuth
export const selectUserAddresses = (state: RootState) =>
  state.user.info.addresses
export const selectUserDefaultAddress = (state: RootState) =>
  state.user.info.addresses.filter((address) => address.isDefault)[0]
export const selectUserPayments = (state: RootState) => state.user.info.payments
export const selectUserDefaultPayment = (state: RootState) =>
  state.user.info.payments.filter((payment) => payment.isDefault)[0]

export default userSlice.reducer
