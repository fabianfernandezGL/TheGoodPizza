import { Stack } from '@mui/material'
import { AddressAddNew, AddressDisplay } from 'components/Checkout/Address'
import { IsUser } from 'components/Checkout/IsUser'
import { SmallTitle } from 'components/Typography'
import { useAppSelector } from 'redux/hooks'
import { selectUserAddresses } from 'redux/slices/user'
import { theme } from 'styles/theme'

export function Address() {
  const addresses = useAppSelector(selectUserAddresses)

  return (
    <Stack spacing={8}>
      <Stack spacing={2}>
        <SmallTitle color={theme.colors.white.DEFAULT}>
          Your Addresses
        </SmallTitle>
        <IsUser />
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
