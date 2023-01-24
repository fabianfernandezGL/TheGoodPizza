import { Box, Divider, Grid } from '@mui/material'
import { Text } from 'components/Typography'
import { theme } from 'styles/theme'
import { PizzaOrder } from 'global.types'

interface OrderCostsProps {
  order: PizzaOrder
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
    <>
      <Grid item xs={9}>
        <Text fontWeight={text === 'Total' ? '700' : '500'} color={textColor}>
          {text}
        </Text>
      </Grid>
      <Grid item xs={2} textAlign="right">
        <Text color={priceColor}>
          <strong>
            {extraSymbols}${price.toFixed(2)}
          </strong>
        </Text>
      </Grid>
    </>
  )
}

export function OrderCosts({ order }: OrderCostsProps) {
  const { expressPrice, savingsPercent, subTotalPrice, tax } = order
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-start"
      spacing={1}
      mt={4}
    >
      <Grid item xs={11} mb={1}>
        <Divider sx={{ borderColor: theme.colors.gray.light }} />
      </Grid>
      {generateRow('Subtotal', subTotalPrice)}
      {generateRow('Total Savings', subTotalPrice * savingsPercent)}
      <Box my={3} />
      {generateRow('Express', expressPrice)}
      {generateRow('Taxes (13%)', tax)}
      {generateRow(
        'Total',
        tax + expressPrice + subTotalPrice - subTotalPrice * savingsPercent
      )}
    </Grid>
  )
}
