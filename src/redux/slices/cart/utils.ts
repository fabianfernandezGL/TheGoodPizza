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
  console.log('items', [...items])
  return items.filter(
    (item) => item.itemInfo.name !== itemNameToRemove && item.quantity > 0
  )
}

export const removeItemQtyFromCart = (
  items: Array<PizzaOrderItem>,
  itemNameToRemove: string,
  qty: number
) => {
  for (let index = 0; index < items.length; index++) {
    if (itemNameToRemove === items[index].itemInfo.name) {
      items[index].quantity -= qty
      break
    }
  }
  console.log('items', [...items])

  return removeItemFromCart(items, '')
}

export const addItemQtyFromCart = (
  items: Array<PizzaOrderItem>,
  itemNameToAdd: string,
  qty: number
) => {
  for (let index = 0; index < items.length; index++) {
    if (itemNameToAdd === items[index].itemInfo.name) {
      items[index].quantity += qty
      break
    }
  }
  return items
}

export const itemInCart = (items: Array<PizzaOrderItem>, itemName: string) =>
  items.some((item) => item.itemInfo.name === itemName)
