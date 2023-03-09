import { Stack } from '@mui/material'

import { theme } from 'styles/theme'
import { Text } from 'components/Typography'
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
        <Text
          color={theme.colors.white.DEFAULT}
          data-testid="item-summary-quantity"
        >
          {quantity}
        </Text>
        <Text
          color={theme.colors.white.DEFAULT}
          data-testid="item-summary-name"
        >
          {capitalizeText(name)}
        </Text>
      </Stack>
      <Text
        color={theme.colors.white.DEFAULT}
        textAlign="right"
        data-testid="item-summary-price"
      >
        <strong>${total.toFixed(2)}</strong>
      </Text>
    </Stack>
  )
}
