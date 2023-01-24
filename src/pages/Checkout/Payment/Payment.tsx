import { Link, Stack } from '@mui/material'
import { PaymentAddNew, PaymentDisplay } from 'components/Checkout/Payments'
import { SmallTitle, Text } from 'components/Typography'
import { useAppSelector } from 'redux/hooks'
import { selectUserInfo, selectUserPayments } from 'redux/slices/user'
import { theme } from 'styles/theme'

export function Payment() {
  const payments = useAppSelector(selectUserPayments)
  const user = useAppSelector(selectUserInfo)

  return (
    <Stack spacing={8}>
      <Stack spacing={2}>
        <SmallTitle color={theme.colors.white.DEFAULT}>
          Your Payments
        </SmallTitle>
        {user.name && (
          <Text color={theme.colors.white.DEFAULT}>
            {user.name}, not you?{' '}
            <Link color="primary" onClick={() => {}} sx={{ cursor: 'pointer' }}>
              Click here
            </Link>
          </Text>
        )}
      </Stack>
      <Stack direction="row" spacing={2}>
        {payments?.map((payment, idx) => (
          <PaymentDisplay payment={payment} index={idx} key={payment.name} />
        ))}
      </Stack>
      <PaymentAddNew />
    </Stack>
  )
}
