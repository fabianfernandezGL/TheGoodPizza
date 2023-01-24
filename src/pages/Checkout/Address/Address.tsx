import { Link, Stack } from '@mui/material'
import { AddressAddNew, AddressDisplay } from 'components/Checkout/Address'
import { SmallTitle, Text } from 'components/Typography'
import { useAppSelector } from 'redux/hooks'
import { selectUserAddresses, selectUserInfo } from 'redux/slices/user'
import { theme } from 'styles/theme'

export function Address() {
  const addresses = useAppSelector(selectUserAddresses)
  const user = useAppSelector(selectUserInfo)

  return (
    <Stack spacing={8}>
      <Stack spacing={2}>
        <SmallTitle color={theme.colors.white.DEFAULT}>
          Your Addresses
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
        {addresses?.map((address, idx) => (
          <AddressDisplay address={address} index={idx} key={address.name} />
        ))}
      </Stack>
      <AddressAddNew />
    </Stack>
  )
}
