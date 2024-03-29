import styled from 'styled-components'
import { Card as CardMui } from '@mui/material'

import { theme } from 'styles/theme'

const Card = styled(CardMui)({
  background: theme.colors.black.light,
  borderRadius: '10px',
  padding: '20px',
  width: '380px',
}) as typeof CardMui

type AddressBoxProps = {
  children: JSX.Element[] | JSX.Element
}

export function AddressBox({ children }: AddressBoxProps) {
  return <Card>{children}</Card>
}
