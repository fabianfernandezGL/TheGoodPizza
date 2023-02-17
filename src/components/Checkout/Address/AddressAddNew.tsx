import { useState } from 'react'
import { Stack } from '@mui/material'

import { theme } from 'styles/theme'
import Button from 'components/Button'
import { Text } from 'components/Typography'

import { AddressBox } from './AddressBox'
import { AddressForm } from './AddressForm'

const componentTextColor = theme.colors.white.DEFAULT

export function AddressAddNew() {
  const [showForm, setShowForm] = useState(false)
  return (
    <AddressBox>
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
            <Text color={componentTextColor}>Add new address</Text>
          </Stack>
        )}
        {showForm && <AddressForm onSubmitForm={() => setShowForm(false)} />}
      </>
    </AddressBox>
  )
}
