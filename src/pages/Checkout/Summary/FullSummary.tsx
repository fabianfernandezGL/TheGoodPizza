import { Box, Stack } from '@mui/material'
import { SmallTitle } from 'components/Typography'
import { PizzaOrder } from 'global.types'
import { useAppSelector } from 'redux/hooks'
import {
  selectUserDefaultAddress,
  selectUserDefaultPayment,
} from 'redux/slices/user'
import { theme } from 'styles/theme'
import { ItemsTable } from 'components/Checkout/ItemsTable'
import { PaymentDisplay } from 'components/Checkout/Payments'
import { AddressDisplay } from 'components/Checkout/Address'
import { OrderCosts } from 'components/Checkout/Summary/OrderCosts'
import { IsUser } from 'components/Checkout/IsUser'

type FullSummaryProps = {
  order: PizzaOrder
}

export function FullSummary({ order }: FullSummaryProps) {
  const defaultPayment = useAppSelector(selectUserDefaultPayment)
  const defaultAddress = useAppSelector(selectUserDefaultAddress)

  return (
    <Stack spacing={8}>
      <Stack spacing={2}>
        <SmallTitle color={theme.colors.white.DEFAULT}>
          Order Summary
        </SmallTitle>
        <IsUser />
      </Stack>
      <ItemsTable items={order.items} />
      <Stack direction="row" spacing={3}>
        <PaymentDisplay payment={defaultPayment} />
        <AddressDisplay address={defaultAddress} />
      </Stack>
      <Box px={2}>
        <OrderCosts order={order} />
      </Box>
    </Stack>
  )
}
