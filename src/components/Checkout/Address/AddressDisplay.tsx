import { Stack } from '@mui/material'

import { theme } from 'styles/theme'
import Button from 'components/Button'
import { Address } from 'global.types'
import { useAppDispatch } from 'redux/hooks'
import { formatPhoneNumber } from 'utils/textHelper'
import { Subtitle, Text } from 'components/Typography'
import { FavoriteButton } from 'components/FavoriteButton'
import { removeAddress, setDefaultAddress } from 'redux/slices/user'

import { AddressBox } from './AddressBox'

const componentTextColor = theme.colors.white.DEFAULT

type AddressDisplayProps = {
  address: Address
  index?: number
}

export function AddressDisplay({ address, index }: AddressDisplayProps) {
  const { city, isDefault, name, phoneNumber, state, street1, street2, zip } =
    address
  const dispatch = useAppDispatch()
  const setDefault = () => {
    dispatch(setDefaultAddress({ address, index: index ?? 0 }))
  }
  const deleteAddress = () => {
    dispatch(removeAddress({ address, index: index ?? 0 }))
  }
  return (
    <AddressBox>
      <Stack spacing={3}>
        <Subtitle color={componentTextColor}>{name}</Subtitle>
        <Stack spacing={1}>
          <Text color={componentTextColor}>
            <span>{street1},</span>
            <br />
            <span>{street2}</span>
            <br />
            <span>{`${city}, ${state}, ${zip}`}</span>
          </Text>
          <Text color={componentTextColor}>{`${formatPhoneNumber(
            phoneNumber
          )}`}</Text>
        </Stack>
        {index !== undefined && (
          <Stack direction="row" justifyContent="space-between">
            <Button
              variant="outlined"
              color="secondary"
              onClick={deleteAddress}
              disabled={isDefault}
            >
              Delete
            </Button>
            <FavoriteButton
              nonDefaultTextDisplay="Make favorite"
              defaultTextDisplay="Default address"
              setDefault={setDefault}
              isDefault={isDefault}
            />
          </Stack>
        )}
      </Stack>
    </AddressBox>
  )
}
