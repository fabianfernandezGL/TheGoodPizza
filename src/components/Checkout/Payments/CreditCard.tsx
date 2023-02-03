import { Stack } from '@mui/material'
import { Payment } from 'global.types'
import { formatCreditCard, getCardType } from 'utils/textHelper'
import { cardTypeIcon } from './PaymentDisplay'

type CreditCardProps = {
  cardNumber?: Payment['cardNumber']
  expiration?: Payment['expiration']
  nameOnCard?: Payment['nameOnCard']
}

const cardStyle = {
  maxWidth: '100%',
  minHeight: '183px',
  padding: '15px',
  background: '#191919',
  boxShadow: '3px 3px 5px #191919',
  color: 'white',
  borderRadius: '4px',
}

export function CreditCard({
  cardNumber,
  expiration,
  nameOnCard,
}: CreditCardProps) {
  return (
    <>
      {(cardNumber || expiration || nameOnCard) && (
        <div style={cardStyle}>
          {cardNumber && cardNumber.length > 2 && (
            <img
              src={cardTypeIcon[getCardType(cardNumber) ?? 0]}
              width="50px"
            />
          )}
          <pre>{formatCreditCard(cardNumber ?? '')}</pre>
          <Stack direction="row" justifyContent="space-between">
            <pre>{nameOnCard ?? ''}</pre>
            <pre>{expiration ?? ''}</pre>
          </Stack>
        </div>
      )}
    </>
  )
}
