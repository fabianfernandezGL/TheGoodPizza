import { Box, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {
  selectUserDefaultAddress,
  selectUserDefaultPayment,
} from 'redux/slices/user'
import { theme } from 'styles/theme'
import Button from 'components/Button'
import { addOrder } from 'services/user'
import { reset } from 'redux/slices/cart'
import routes from 'constants/routes.json'
import { IsUser } from 'components/Checkout/IsUser'
import { ItemsTable } from 'components/Checkout/ItemsTable'
import { AddressDisplay } from 'components/Checkout/Address'
import { SmallTitle, Subtitle } from 'components/Typography'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { PaymentDisplay } from 'components/Checkout/Payments'
import { PizzaOrder, PizzaOrderConfirmation } from 'global.types'
import { OrderCosts } from 'components/Checkout/Summary/OrderCosts'

type FullSummaryProps = {
  order: PizzaOrder
  prevStep: () => void
}

export function FullSummary({ order, prevStep }: FullSummaryProps) {
  const defaultPayment = useAppSelector(selectUserDefaultPayment)
  const defaultAddress = useAppSelector(selectUserDefaultAddress)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const placeOrder = () => {
    addOrder({
      ...order,
      address: defaultAddress,
      payment: defaultPayment,
    }).then((orderConfirm: PizzaOrderConfirmation) => {
      dispatch(reset())
      navigate(
        `/${routes.CHECKOUT_ROOT}/${routes.CHECKOUT_ORDER}/${orderConfirm.num}`
      )
    })
  }

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
          disabled={
            !defaultAddress || !defaultPayment || order.items.length === 0
          }
          onClick={placeOrder}
        >
          <Subtitle color={theme.colors.white.DEFAULT}>Place Order</Subtitle>
        </Button>
      </Stack>
    </Stack>
  )
}
