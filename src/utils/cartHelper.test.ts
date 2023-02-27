import Pizzas from 'constants/pizzaOptions'
import { generateMenuItemData } from './cartHelper'

test('generateMenuItemData should generate a valid PizzaOrderItem', () => {
  const generatedPizzaOrderItem = generateMenuItemData(Pizzas[0])

  expect(generatedPizzaOrderItem).toMatchObject({
    itemInfo: {
      ...Pizzas[0],
      colors: undefined,
      img: undefined,
    },
    quantity: 1,
    total: Pizzas[0].price,
  })
})
