import { PizzaInformation, PizzaOrderItem } from 'global.types'

export const generateMenuItemData = (
  data: PizzaInformation
): PizzaOrderItem => {
  return {
    itemInfo: {
      ...data,
      colors: undefined,
      img: undefined,
    },
    quantity: 1,
    total: data.price,
  }
}
