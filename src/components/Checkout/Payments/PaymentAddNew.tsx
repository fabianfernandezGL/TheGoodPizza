import { useState } from 'react'
import { Stack } from '@mui/material'

import { theme } from 'styles/theme'
import Button from 'components/Button'
import { Text } from 'components/Typography'

import { PaymentBox } from './PaymentBox'
import { PaymentForm } from './PaymentForm'

const componentTextColor = theme.colors.white.DEFAULT

export function PaymentAddNew() {
  const [showForm, setShowForm] = useState(false)
  return (
    <PaymentBox>
      <>
        {!showForm && (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setShowForm(true)}
            >
              New
            </Button>
            <Text color={componentTextColor}>Add new payment</Text>
          </Stack>
        )}
        {showForm && <PaymentForm onSubmitForm={() => setShowForm(false)} />}
      </>
    </PaymentBox>
  )
}
