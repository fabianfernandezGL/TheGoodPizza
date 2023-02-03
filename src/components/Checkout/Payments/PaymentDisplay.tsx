import { Stack } from '@mui/material'
import Button from 'components/Button'
import { Subtitle, Text } from 'components/Typography'
import { CardType, Payment } from 'global.types'
import { formatCreditCard, getCardType } from 'utils/textHelper'
import { PaymentBox } from './PaymentBox'
import { theme } from 'styles/theme'
import { FavoriteButton } from 'components/FavoriteButton'
import { useAppDispatch } from 'redux/hooks'
import { removePayment, setDefaultPayment } from 'redux/slices/user'
import AmexIconURL from 'images/checkout/card-types/amex.svg'
import VisaIconURL from 'images/checkout/card-types/visa.svg'
import MasterCardIconURL from 'images/checkout/card-types/mastercard.svg'
import JcbIconURL from 'images/checkout/card-types/jcb.svg'
import DiscoverIconURL from 'images/checkout/card-types/discover.svg'
import DinersIconURL from 'images/checkout/card-types/diners.svg'

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
