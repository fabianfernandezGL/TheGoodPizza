import { z } from 'zod'
import { Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  formatCreditCard,
  validateCVV,
  validateCardNumber,
  validateCreditCardExpirationDate,
} from 'utils/textHelper'
import { theme } from 'styles/theme'
import Button from 'components/Button'
import { useAppDispatch } from 'redux/hooks'
import { addPayment } from 'redux/slices/user'
import { Subtitle } from 'components/Typography'
import TextField from 'components/Form/Textfield'

import { CreditCard } from './CreditCard'

const componentTextColor = theme.colors.white.DEFAULT

const paymentSchema = z.object({
  name: z.string().min(2, 'Name is required').max(18, 'Keep a simple name!'),
  nameOnCard: z.string().min(2, 'Name is required'),
  cardNumber: z
    .string()
    .min(16, 'Enter a valid card number')
    .refine(validateCardNumber, 'Enter a valid card number'),
  cvv: z
    .string()
    .min(3, 'Enter a valid CVV')
    .refine(validateCVV, 'Enter a valid CVV'),
  expiration: z
    .string()
    .min(5, 'Enter a valid expiration date with format: MM/YY or MM/YYYY')
    .refine(
      validateCreditCardExpirationDate,
      'Enter a valid expiration date with format: MM/YY or MM/YYYY'
    ),
})

type PaymentFormModalProps = {
  onSubmitForm: () => void
}

export function PaymentForm({ onSubmitForm }: PaymentFormModalProps) {
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof paymentSchema>>({
    mode: 'onChange',
    resolver: zodResolver(paymentSchema),
    reValidateMode: 'onChange',
  })

  const onSubmit = (payment: z.infer<typeof paymentSchema>) => {
    dispatch(addPayment({ payment: { ...payment, isDefault: true }, index: 0 }))
    onSubmitForm()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Subtitle color={componentTextColor}>Add Payment</Subtitle>
        <CreditCard
          cardNumber={watch('cardNumber')}
          expiration={watch('expiration')}
          nameOnCard={watch('nameOnCard')}
        />
        <Stack spacing={2}>
          <TextField
            name="name"
            fieldError={errors.name}
            control={control}
            label="Name"
            type="text"
            placeholder="MasterCard Black"
          />
          <TextField
            name="nameOnCard"
            fieldError={errors.nameOnCard}
            control={control}
            label="Name on card"
            type="text"
            placeholder="Jane Doe"
          />
          <TextField
            name="cardNumber"
            fieldError={errors.cardNumber}
            control={control}
            label="Card Number"
            type="text"
            placeholder={formatCreditCard('8888888888888888') ?? ''}
          />
          <TextField
            name="cvv"
            fieldError={errors.cvv}
            control={control}
            label="CVV"
            type="text"
            placeholder="XXX"
          />
          <TextField
            name="expiration"
            fieldError={errors.expiration}
            control={control}
            label="Expiration"
            type="text"
            placeholder="MM/YYYY"
          />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="outlined"
            type="submit"
            color="secondary"
            disabled={!isValid}
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}
