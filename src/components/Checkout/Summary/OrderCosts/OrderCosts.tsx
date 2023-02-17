import { Box, Stack } from '@mui/material'

import { theme } from 'styles/theme'
import { PizzaOrder } from 'global.types'
import { Text } from 'components/Typography'

interface OrderCostsProps {
  order: PizzaOrder
  denseRows: boolean
}

const generateRow = (text: string, price: number) => {
  let textColor = theme.colors.white.DEFAULT
  let priceColor = theme.colors.white.DEFAULT
  let extraSymbols = ''
  if (text === 'Total') {
    textColor = theme.colors.yellow.DEFAULT
  }
  if (text === 'Total Savings') {
    priceColor = theme.colors.green.DEFAULT
    extraSymbols = '-'
  }
  return (
    <Stack direction="row" justifyContent="space-between">
      <Text fontWeight={text === 'Total' ? '700' : '500'} color={textColor}>
        {text}
      </Text>
      <Text color={priceColor} textAlign="right">
        <strong>
          {extraSymbols}${price.toFixed(2)}
        </strong>
      </Text>
    </Stack>
  )
}

export function OrderCosts({ order, denseRows }: OrderCostsProps) {
  const { expressPrice, savingsPercent, subTotalPrice, tax } = order
  return (
    <Stack spacing={denseRows ? 1 : 3}>
      {generateRow('Subtotal', subTotalPrice)}
      {generateRow('Total Savings', subTotalPrice * savingsPercent)}
      <Box my={3} />
      {generateRow('Express', expressPrice)}
      {generateRow('Taxes (13%)', tax)}
      {generateRow(
        'Total',
        tax + expressPrice + subTotalPrice - subTotalPrice * savingsPercent
      )}
    </Stack>
  )
}

OrderCosts.defaultProps = {
  denseRows: false,
}
