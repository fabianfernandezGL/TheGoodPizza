import {
  addItemQtyFromCart,
  calculateTotals,
  itemInCart,
  removeItemFromCart,
  removeItemQtyFromCart,
} from './utils'
import { PizzaOrder, PizzaOrderItem } from 'global.types'
import { RootState } from 'redux/store'
import { createSlice } from '@reduxjs/toolkit'

type CartState = {
  cart: PizzaOrder
}

const initialState: CartState = {
  cart: {
    expressPrice: 5,
    items: [],
    savingsPercent: 0.05,
    subTotalPrice: 5,
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
    add: (state, { payload }: CartAction) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const itemExists = itemInCart(
        state.cart.items,
        payload.item.itemInfo.name
      )
      const updatedCart: PizzaOrder = calculateTotals({
        ...state.cart,
        items: itemExists
          ? addItemQtyFromCart(state.cart.items, payload.item.itemInfo.name, 1)
          : [...state.cart.items, payload.item],
      })
      state.cart = { ...updatedCart }
    },
    remove: (state, { payload }: CartAction) => {
      const updatedCart: PizzaOrder = calculateTotals({
        ...state.cart,
        items: removeItemFromCart(state.cart.items, payload.item.itemInfo.name),
      })
      state.cart = updatedCart
    },
    removeItemQty: (state, { payload }: CartAction) => {
      const updatedCart: PizzaOrder = calculateTotals({
        ...state.cart,
        items: removeItemQtyFromCart(
          state.cart.items,
          payload.item.itemInfo.name,
          payload.quantity ?? 1
        ),
      })
      state.cart = updatedCart
    },
  },
})

export const { add, remove, removeItemQty } = cartSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCart = (state: RootState) => state.cart
export const selectCartItemsQty = (state: RootState) =>
  state.cart.items.reduce((acc, currItem) => currItem.quantity + acc, 0)

export default cartSlice.reducer
