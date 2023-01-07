import { getTax } from 'utils/priceHelper'
import { PizzaOrder, PizzaOrderItem } from 'global.types'

export const calculateTotals = (cart: PizzaOrder): PizzaOrder => {
  const itemsWithUpdatedTotals = cart.items.map((item) => ({
    ...item,
    total: item.itemInfo.price * item.quantity,
  }))
  const subTotalPrice = itemsWithUpdatedTotals.reduce(
    (prevPrice, currItem) => prevPrice + currItem.total,
    0
  )
  return {
    ...cart,
    items: itemsWithUpdatedTotals,
    subTotalPrice,
    tax: getTax(subTotalPrice),
  }
}

export const removeItemFromCart = (
  items: Array<PizzaOrderItem>,
  itemNameToRemove: string
) => {
  return items.filter(
    (item) => item.itemInfo.name === itemNameToRemove || item.quantity === 0
  )
}

export const removeItemQtyFromCart = (
  items: Array<PizzaOrderItem>,
  itemNameToRemove: string,
  qty: number
) => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (itemNameToRemove === item.itemInfo.name) {
      item.quantity -= qty
    }
  }

  return removeItemFromCart(items, '')
}

export const addItemQtyFromCart = (
  items: Array<PizzaOrderItem>,
  itemNameToAdd: string,
  qty: number
) => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (itemNameToAdd === item.itemInfo.name) {
      item.quantity += qty
    }
  }

  return items
}

export const itemInCart = (items: Array<PizzaOrderItem>, itemName: string) =>
  items.some((item) => item.itemInfo.name === itemName)
