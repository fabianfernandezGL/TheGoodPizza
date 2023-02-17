import { useEffect } from 'react'
import { Stack } from '@mui/material'

import { theme } from 'styles/theme'
import { useAppSelector } from 'redux/hooks'
import { saveAddresses } from 'services/user'
import { SmallTitle } from 'components/Typography'
import { IsUser } from 'components/Checkout/IsUser'
import { selectUserAddresses } from 'redux/slices/user'
import { AddressAddNew, AddressDisplay } from 'components/Checkout/Address'

export function Address() {
  const addresses = useAppSelector(selectUserAddresses)

  useEffect(() => {
    if (addresses.length > 0) {
      saveAddresses(addresses)
    }
  }, [addresses])

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
