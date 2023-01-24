import { Grid } from '@mui/material'
import { Text } from 'components/Typography'
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
        <Text color={theme.colors.white.DEFAULT}>{quantity}</Text>
      </Grid>
      <Grid item xs={9}>
        <Text color={theme.colors.white.DEFAULT}>{capitalizeText(name)}</Text>
      </Grid>
      <Grid item xs={2} textAlign="right">
        <Text color={theme.colors.white.DEFAULT}>
          <strong>${total.toFixed(2)}</strong>
        </Text>
      </Grid>
    </>
  )
}
