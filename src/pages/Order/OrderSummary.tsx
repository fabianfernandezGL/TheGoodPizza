import { Box, Card as CardMui, Divider, Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from 'components/Button'
import styled from 'styled-components'
import { Caption, Subtitle } from 'components/Typography'
import { theme } from 'styles/theme'
import { PizzaOrder, PizzaOrderItem } from 'global.types'
import { capitalizeText } from 'utils/textHelper'
import React from 'react'

const Card = styled(CardMui)({
  background: theme.colors.black.light,
  borderRadius: '10px 10px 100px 10px',
  padding: '35px',
  width: '100%',
}) as typeof CardMui

interface OrderSummaryProps {
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
        <Caption
          fontWeight={text === 'Total' ? '700' : '500'}
          color={textColor}
        >
          {text}
        </Caption>
      </Grid>
      <Grid item xs={2} textAlign="right">
        <Caption color={priceColor}>
          <strong>
            {extraSymbols}${price.toFixed(2)}
          </strong>
        </Caption>
      </Grid>
    </>
  )
}

export function OrderSummary({ order }: OrderSummaryProps) {
  const { expressPrice, savingsPercent, subTotalPrice, tax } = order
  return (
    <Card>
      <CardContent>
        <Subtitle color={theme.colors.yellow.DEFAULT}>Summary</Subtitle>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          my={4}
        >
          {order.items.map(
            ({ item, quantity, total }: PizzaOrderItem, idx: number) => {
              return (
                <React.Fragment key={`${item.name}-${idx}`}>
                  <Grid item xs={1}>
                    <Caption color={theme.colors.white.DEFAULT}>
                      {quantity}
                    </Caption>
                  </Grid>
                  <Grid item xs={9}>
                    <Caption color={theme.colors.white.DEFAULT}>
                      Medium {capitalizeText(item.name)}
                    </Caption>
                  </Grid>
                  <Grid item xs={2} textAlign="right">
                    <Caption color={theme.colors.white.DEFAULT}>
                      <strong>${total.toFixed(2)}</strong>
                    </Caption>
                  </Grid>
                </React.Fragment>
              )
            }
          )}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          mt={4}
        >
          <Grid item xs={11} mb={1}>
            <Divider sx={{ borderColor: theme.colors.gray.light }} />
          </Grid>
          {generateRow('Subtotal', subTotalPrice)}
          {generateRow('Total Savings', subTotalPrice * savingsPercent)}
          <Box my={3} />
          {generateRow('Express', expressPrice)}
          {generateRow('Taxes', tax)}
          {generateRow(
            'Total',
            tax + expressPrice + subTotalPrice - subTotalPrice * savingsPercent
          )}
        </Grid>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Grid item xs={11} mb={1}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
            >
              Next Step
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
