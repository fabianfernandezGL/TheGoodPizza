import { Stack } from '@mui/material'

import { PizzaOrderItem } from 'global.types'
import { OrderLine } from 'components/Checkout/Summary/OrderLine'

interface OrderItemsProps {
  items: Array<PizzaOrderItem>
}

export function OrderItems({ items }: OrderItemsProps) {
  return (
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      mt={4}
      spacing={1}
    >
      {items.map((item: PizzaOrderItem, idx: number) => {
        return (
          <OrderLine
            orderLine={item}
            key={`${item.itemInfo.name}-${item.quantity}-${idx}`}
          />
        )
      })}
    </Stack>
  )
}
