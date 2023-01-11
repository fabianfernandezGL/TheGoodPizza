import { Grid } from '@mui/material'
import { Caption } from 'components/Typography'
import { theme } from 'styles/theme'
import { PizzaOrderItem } from 'global.types'
import { capitalizeText } from 'utils/textHelper'

interface OrderLineProps {
  orderLine: PizzaOrderItem
}

export function OrderLine({ orderLine }: OrderLineProps) {
  const {
    quantity,
    itemInfo: { name },
    total,
  } = orderLine
  return (
    <>
      <Grid item xs={1}>
        <Caption color={theme.colors.white.DEFAULT}>{quantity}</Caption>
      </Grid>
      <Grid item xs={9}>
        <Caption color={theme.colors.white.DEFAULT}>
          {capitalizeText(name)}
        </Caption>
      </Grid>
      <Grid item xs={2} textAlign="right">
        <Caption color={theme.colors.white.DEFAULT}>
          <strong>${total.toFixed(2)}</strong>
        </Caption>
      </Grid>
    </>
  )
}
