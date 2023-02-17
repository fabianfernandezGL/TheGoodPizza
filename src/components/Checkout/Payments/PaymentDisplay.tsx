import { Stack } from '@mui/material'

import { theme } from 'styles/theme'
import Button from 'components/Button'
import { useAppDispatch } from 'redux/hooks'
import { CardType, Payment } from 'global.types'
import { Subtitle, Text } from 'components/Typography'
import { FavoriteButton } from 'components/FavoriteButton'
import JcbIconURL from 'images/checkout/card-types/jcb.svg'
import AmexIconURL from 'images/checkout/card-types/amex.svg'
import VisaIconURL from 'images/checkout/card-types/visa.svg'
import { formatCreditCard, getCardType } from 'utils/textHelper'
import DinersIconURL from 'images/checkout/card-types/diners.svg'
import { removePayment, setDefaultPayment } from 'redux/slices/user'
import DiscoverIconURL from 'images/checkout/card-types/discover.svg'
import MasterCardIconURL from 'images/checkout/card-types/mastercard.svg'

import { PaymentBox } from './PaymentBox'

const componentTextColor = theme.colors.white.DEFAULT

export const cardTypeIcon = {
  [CardType.amex]: AmexIconURL,
  [CardType.diners]: DinersIconURL,
  [CardType.discover]: DiscoverIconURL,
  [CardType.jcb]: JcbIconURL,
  [CardType.mastercard]: MasterCardIconURL,
  [CardType.visa]: VisaIconURL,
}

type PaymentDisplayProps = {
  payment: Payment
  index?: number
}

export function PaymentDisplay({ payment, index }: PaymentDisplayProps) {
  const { cardNumber, expiration, isDefault, name, nameOnCard } = payment
  const dispatch = useAppDispatch()
  const setDefault = () => {
    dispatch(setDefaultPayment({ payment, index: index ?? 0 }))
  }
  const deleteCard = () => {
    dispatch(removePayment({ payment, index: index ?? 0 }))
  }
  return (
    <PaymentBox>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Subtitle color={componentTextColor}>{name}</Subtitle>
          <img src={cardTypeIcon[getCardType(cardNumber) ?? 0]} width="50px" />
        </Stack>
        <Stack>
          <Text color={componentTextColor}>
            <span>{formatCreditCard(cardNumber)}</span>
            <br />
            <strong>Name on card:</strong> <span>{nameOnCard}</span>
            <br />
            <strong>Expiration:</strong> <span>{expiration}</span>
            <br />
            <strong>Security Code:</strong> <span>XXX</span>
          </Text>
        </Stack>
        {index !== undefined && (
          <Stack direction="row" justifyContent="space-between">
            <Button
              variant="outlined"
              color="secondary"
              disabled={isDefault}
              onClick={deleteCard}
            >
              Delete
            </Button>
            <FavoriteButton
              nonDefaultTextDisplay="Use this card"
              defaultTextDisplay="Using this card"
              setDefault={setDefault}
              isDefault={isDefault}
            />
          </Stack>
        )}
      </Stack>
    </PaymentBox>
  )
}
