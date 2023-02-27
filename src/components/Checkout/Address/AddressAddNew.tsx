import { useState } from 'react'
import { Collapse, Divider, Stack } from '@mui/material'

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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setShowForm(!showForm)}
        >
          {!showForm && 'New'}
          {showForm && 'Cancel'}
        </Button>
        {!showForm && <Text color={componentTextColor}>Add new address</Text>}
      </Stack>
      <Collapse in={showForm} timeout={450}>
        <Stack spacing={3} mt={3}>
          <Divider color="white" />
          <AddressForm onSubmitForm={() => setShowForm(false)} />
        </Stack>
      </Collapse>
    </AddressBox>
  )
}
