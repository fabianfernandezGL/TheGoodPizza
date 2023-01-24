import { Stack } from '@mui/material'
import Button from 'components/Button'
import { Subtitle, Text } from 'components/Typography'
import { Address } from 'global.types'
import { formatPhoneNumber } from 'utils/textHelper'
import { AddressBox } from './AddressBox'
import { theme } from 'styles/theme'
import { FavoriteButton } from 'components/FavoriteButton'
import { useAppDispatch } from 'redux/hooks'
import { setDefaultAddress } from 'redux/slices/user'

const componentTextColor = theme.colors.white.DEFAULT

type AddressDisplayProps = {
  address: Address
  index: number
}

export function AddressDisplay({ address, index }: AddressDisplayProps) {
  const { city, isDefault, name, phoneNumber, state, street1, street2, zip } =
    address
  const dispatch = useAppDispatch()
  const setDefault = () => {
    dispatch(setDefaultAddress({ address, index }))
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
        <Stack direction="row" justifyContent="space-between">
          <Button variant="outlined" color="secondary">
            Edit
          </Button>
          <FavoriteButton
            nonDefaultTextDisplay="Make favorite"
            defaultTextDisplay="Default address"
            setDefault={setDefault}
            isDefault={isDefault}
          />
        </Stack>
      </Stack>
    </AddressBox>
  )
}
