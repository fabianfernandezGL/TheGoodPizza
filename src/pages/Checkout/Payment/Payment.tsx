import { useEffect } from 'react'
import { Grid, Stack } from '@mui/material'

import { theme } from 'styles/theme'
import { useAppSelector } from 'redux/hooks'
import { savePayments } from 'services/user'
import { SmallTitle } from 'components/Typography'
import { IsUser } from 'components/Checkout/IsUser'
import { selectUserPayments } from 'redux/slices/user'
import { PaymentAddNew, PaymentDisplay } from 'components/Checkout/Payments'

export function Payment() {
  const payments = useAppSelector(selectUserPayments)

  useEffect(() => {
    savePayments(payments)
  }, [payments])

  return (
    <Stack spacing={8}>
      <Stack spacing={2}>
        <SmallTitle color={theme.colors.white.DEFAULT}>
          Your Payments
        </SmallTitle>
        <IsUser />
      </Stack>
      <Grid container justifyContent="flex-start">
        {payments?.map((payment, idx) => (
          <Grid item mr={2} mb={2} key={`${payment.name}-${idx}`}>
            <PaymentDisplay payment={payment} index={idx} />
          </Grid>
        ))}
      </Grid>
      <PaymentAddNew />
    </Stack>
  )
}
