import { z } from 'zod'
import { Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { theme } from 'styles/theme'
import Button from 'components/Button'
import { useAppDispatch } from 'redux/hooks'
import { addAddress } from 'redux/slices/user'
import { Subtitle } from 'components/Typography'
import TextField from 'components/Form/Textfield'
import { PHONE_VALIDATION } from 'constants/general'

const componentTextColor = theme.colors.white.DEFAULT

const addressSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  street1: z.string().min(2, 'Street 1 is required'),
  street2: z.string(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zip: z
    .string()
    .min(5, 'Valid ZIP is required')
    .max(5, 'Valid ZIP is required'),
  phoneNumber: PHONE_VALIDATION,
})

type AddressFormModalProps = {
  onSubmitForm: () => void
}

export function AddressForm({ onSubmitForm }: AddressFormModalProps) {
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof addressSchema>>({
    mode: 'onChange',
    resolver: zodResolver(addressSchema),
    reValidateMode: 'onChange',
  })

  const onSubmit = (address: z.infer<typeof addressSchema>) => {
    dispatch(addAddress({ address: { ...address, isDefault: true }, index: 0 }))
    onSubmitForm()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Subtitle color={componentTextColor}>Add Address</Subtitle>
        <Stack spacing={2}>
          <TextField
            name="name"
            fieldError={errors.name}
            control={control}
            label="Name"
            type="text"
            placeholder="Home"
          />
          <TextField
            name="street1"
            fieldError={errors.street1}
            control={control}
            label="Street 1"
            type="text"
            placeholder="456 Bourbon Street"
          />
          <TextField
            name="street2"
            fieldError={errors.street2}
            control={control}
            label="Street 2"
            type="text"
            placeholder="Ingrid Complex"
          />
          <TextField
            name="city"
            fieldError={errors.city}
            control={control}
            label="City"
            type="text"
            placeholder="New Orleans"
          />
          <TextField
            name="state"
            fieldError={errors.state}
            control={control}
            label="State"
            type="text"
            placeholder="LA"
          />
          <TextField
            name="zip"
            fieldError={errors.zip}
            control={control}
            label="ZIP"
            type="text"
            placeholder="09873"
          />
          <TextField
            name="phoneNumber"
            fieldError={errors.phoneNumber}
            control={control}
            label="Phone Number"
            type="text"
            placeholder="88888888"
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
