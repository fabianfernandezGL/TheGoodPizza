import { Stack } from '@mui/material'
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
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={1}
      width="100%"
    >
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Text color={theme.colors.white.DEFAULT}>{quantity}</Text>
        <Text color={theme.colors.white.DEFAULT}>{capitalizeText(name)}</Text>
      </Stack>
      <Text color={theme.colors.white.DEFAULT} textAlign="right">
        <strong>${total.toFixed(2)}</strong>
      </Text>
    </Stack>
  )
}
