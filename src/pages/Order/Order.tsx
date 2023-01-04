import { Grid } from '@mui/material'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'
import mainBg from 'images/menu/bg.png'
import { OrderSummary } from './OrderSummary'
import { PizzaOrder, PizzaOrderItem } from 'global.types'
import Pizzas from 'constants/pizzaOptions'
import { getTax } from 'utils/priceHelper'

const orderItems: Array<PizzaOrderItem> = [
  {
    item: Pizzas[1],
    quantity: 2,
    total: 2 * Pizzas[1].price,
  },
  {
    item: Pizzas[3],
    quantity: 1,
    total: 1 * Pizzas[3].price,
  },
  {
    item: Pizzas[0],
    quantity: 4,
    total: 4 * Pizzas[0].price,
  },
  {
    item: Pizzas[5],
    quantity: 2,
    total: 2 * Pizzas[5].price,
  },
]

const subTotalPrice: number = orderItems.reduce(
  (prevTotal, { total }) => prevTotal + total,
  0
)

const order: PizzaOrder = {
  items: orderItems,
  tax: getTax(subTotalPrice),
  subTotalPrice,
  expressPrice: 5,
  savingsPercent: 0.05,
}
export default function Order(): JSX.Element {
  return (
    <SecondaryLayout
      backgroundImg={mainBg}
      title="WE'RE FAST!"
      bigTitle="Well, sorta."
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={8}
      >
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <OrderSummary order={order} />
        </Grid>
      </Grid>
    </SecondaryLayout>
  )
}
