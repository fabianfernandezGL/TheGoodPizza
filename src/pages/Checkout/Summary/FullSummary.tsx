import { Box, Stack } from '@mui/material'
import { SmallTitle, Subtitle } from 'components/Typography'
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
import Button from 'components/Button'

type FullSummaryProps = {
  order: PizzaOrder
  prevStep: () => void
}

export function FullSummary({ order, prevStep }: FullSummaryProps) {
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
      <Stack direction="row" justifyContent="space-between">
        <Button
          size="large"
          color="secondary"
          variant="outlined"
          sx={{ width: '381px', height: '93px' }}
          onClick={prevStep}
        >
          <Subtitle color={theme.colors.red.DEFAULT}>Go back</Subtitle>
        </Button>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          sx={{ width: '381px', height: '93px' }}
        >
          <Subtitle color={theme.colors.white.DEFAULT}>Place Order</Subtitle>
        </Button>
      </Stack>
    </Stack>
  )
}
