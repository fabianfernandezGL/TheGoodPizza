import { createSlice } from '@reduxjs/toolkit'

import { RootState } from 'redux/store'
import { PizzaOrder, PizzaOrderItem } from 'global.types'

import {
  addItemQtyFromCart,
  calculateTotals,
  itemInCart,
  removeItemFromCart,
  removeItemQtyFromCart,
} from './utils'

type CartState = {
  itemsDetails: PizzaOrder
}

const initialState: CartState = {
  itemsDetails: {
    expressPrice: 5,
    items: [],
    savingsPercent: 0.05,
    subTotalPrice: 0,
    tax: 0,
  },
}

type AddRemovePayload = {
  item: PizzaOrderItem
  quantity?: number
}

type CartAction = {
  type: string
  payload: AddRemovePayload
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => {
      state.itemsDetails = initialState.itemsDetails
    },
    add: (state, { payload }: CartAction) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const itemExists = itemInCart(
        state.itemsDetails.items,
        payload.item.itemInfo.name
      )
      const updatedCart: PizzaOrder = calculateTotals({
        ...state.itemsDetails,
        items: itemExists
          ? addItemQtyFromCart(
              state.itemsDetails.items,
              payload.item.itemInfo.name,
              1
            )
          : [...state.itemsDetails.items, payload.item],
      })
      state.itemsDetails = { ...updatedCart }
    },
    remove: (state, { payload }: CartAction) => {
      const updatedCart: PizzaOrder = calculateTotals({
        ...state.itemsDetails,
        items: removeItemFromCart(
          state.itemsDetails.items,
          payload.item.itemInfo.name
        ),
      })
      state.itemsDetails = updatedCart
    },
    removeItemQty: (state, { payload }: CartAction) => {
      const updatedCart: PizzaOrder = calculateTotals({
        ...state.itemsDetails,
        items: removeItemQtyFromCart(
          [...state.itemsDetails.items],
          payload.item.itemInfo.name,
          payload.quantity ?? 1
        ),
      })
      state.itemsDetails = updatedCart
    },
  },
})

export const { add, remove, removeItemQty, reset } = cartSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCart = (state: RootState) => state.cart.itemsDetails
export const selectCartItemsQty = (state: RootState) =>
  state.cart.itemsDetails.items.reduce(
    (acc, currItem) => currItem.quantity + acc,
    0
  )

export default cartSlice.reducer
