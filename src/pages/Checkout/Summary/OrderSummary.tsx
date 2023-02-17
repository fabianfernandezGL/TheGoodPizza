import styled from 'styled-components'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Card as CardMui, Divider, Grid } from '@mui/material'

import { theme } from 'styles/theme'
import Button from 'components/Button'
import { PizzaOrder } from 'global.types'
import { Subtitle } from 'components/Typography'
import { OrderCosts } from 'components/Checkout/Summary/OrderCosts'
import { OrderItems } from 'components/Checkout/Summary/OrderItems'

const Card = styled(CardMui)({
  background: theme.colors.black.light,
  borderRadius: '10px 10px 100px 10px',
  padding: '35px',
  width: '100%',
}) as typeof CardMui

interface OrderSummaryProps {
  order: PizzaOrder
  nextStep: () => void
  prevStep: () => void
  isNextAvailable: boolean
  isPrevAvailable: boolean
}

export function OrderSummary({
  order,
  nextStep,
  prevStep,
  isPrevAvailable,
  isNextAvailable,
}: OrderSummaryProps) {
  return (
    <Card>
      <CardContent>
        <Subtitle color={theme.colors.yellow.DEFAULT}>Summary</Subtitle>
        <OrderItems items={order.items} />
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing={1}
          mt={1}
        >
          <Grid item xs={11} mb={1}>
            <Divider sx={{ borderColor: theme.colors.gray.light }} />
          </Grid>
          <Grid item xs={11}>
            <OrderCosts order={order} denseRows />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container direction="row" spacing={1} justifyContent="flex-end">
          {isPrevAvailable && (
            <Grid item xs={11}>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                size="large"
                onClick={prevStep}
              >
                Go back
              </Button>
            </Grid>
          )}
          {isNextAvailable && (
            <Grid item xs={11}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                onClick={nextStep}
              >
                Next Step
              </Button>
            </Grid>
          )}
        </Grid>
      </CardActions>
    </Card>
  )
}
