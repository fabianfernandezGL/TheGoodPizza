import styled from 'styled-components'
import { Card as CardMui } from '@mui/material'

import { theme } from 'styles/theme'

const Card = styled(CardMui)({
  background: theme.colors.black.light,
  borderRadius: '10px',
  padding: '20px',
  width: '380px',
}) as typeof CardMui

type PaymentBoxProps = {
  children: JSX.Element[] | JSX.Element
}

export function PaymentBox({ children }: PaymentBoxProps) {
  return <Card>{children}</Card>
}
