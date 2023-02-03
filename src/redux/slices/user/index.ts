import { Address, Payment, UserInfo } from 'global.types'
import { RootState } from 'redux/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { clearTokens } from 'utils/tokenHelper'

type UserState = {
  info: Partial<UserInfo>
  addresses: Array<Address>
  payments: Array<Payment>
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
  info: {},
  addresses: [
    {
      name: 'Home',
      street1: '456 Bourbon Street',
      street2: 'Ingrid Complex, #504',
      city: 'New Orleans',
      state: 'LA',
      zip: '09873',
      phoneNumber: '86373889',
      isDefault: true,
    },
    {
      name: 'Work',
      street1: '456 Bourbon Street',
      street2: 'Ingrid Complex, #504',
      city: 'New Orleans',
      state: 'LA',
      zip: '09873',
      phoneNumber: '67863738',
      isDefault: false,
    },
  ],
  payments: [
    {
      cardNumber: '5303876870748650',
      cvv: '443',
      expiration: '08/2028',
      name: 'BAC Debit',
      nameOnCard: 'Helin Bazhaev',
      isDefault: true,
    },
    {
      cardNumber: '4897715478934962',
      cvv: '300',
      expiration: '02/2025',
      name: 'Scotiabank Visa',
      nameOnCard: 'Sesuna Finch',
      isDefault: false,
    },
  ],
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
      const addresses = [...state.addresses]
      for (const address of addresses) {
        address.isDefault = false
      }
      state.addresses.push(payload.address)
    },
    setDefaultAddress: (state, { payload }: AddressAction) => {
      const addresses = [...state.addresses]
      for (const address of addresses) {
        address.isDefault = false
      }
      addresses[payload.index].isDefault = true
      state.addresses = [...addresses]
    },
    addPayment: (state, { payload }: PaymentAction) => {
      const payments = [...state.payments]
      for (const payment of payments) {
        payment.isDefault = false
      }
      state.payments.push(payload.payment)
    },
    removePayment: (state, { payload }: PaymentAction) => {
      const payments = [
        ...state.payments.filter(
          (payment) => payment.cardNumber !== payload.payment.cardNumber
        ),
      ]
      state.payments = payments
    },
    setDefaultPayment: (state, { payload }: PaymentAction) => {
      const payments = [...state.payments]
      for (const payment of payments) {
        payment.isDefault = false
      }
      payments[payload.index].isDefault = true
      state.payments = [...payments]
    },
  },
})

export const {
  logIn,
  addAddress,
  setDefaultAddress,
  addPayment,
  removePayment,
  setDefaultPayment,
  logOut,
} = userSlice.actions

export const selectUserInfo = (state: RootState) => state.user.info
export const selectIsAuth = (state: RootState) => state.user.isAuth
export const selectUserAddresses = (state: RootState) => state.user.addresses
export const selectUserDefaultAddress = (state: RootState) =>
  state.user.addresses.filter((address) => address.isDefault)[0]
export const selectUserPayments = (state: RootState) => state.user.payments
export const selectUserDefaultPayment = (state: RootState) =>
  state.user.payments.filter((payment) => payment.isDefault)[0]

export default userSlice.reducer
