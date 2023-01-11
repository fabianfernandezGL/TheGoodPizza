import { Card as CardMui, Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from 'components/Button'
import styled from 'styled-components'
import { Subtitle } from 'components/Typography'
import { theme } from 'styles/theme'
import { PizzaOrder } from 'global.types'
import { OrderCosts } from 'components/Order/Summary/OrderCosts'
import { OrderItems } from 'components/Order/Summary/OrderItems'

const Card = styled(CardMui)({
  background: theme.colors.black.light,
  borderRadius: '10px 10px 100px 10px',
  padding: '35px',
  width: '100%',
}) as typeof CardMui

interface OrderSummaryProps {
  order: PizzaOrder
}

export function OrderSummary({ order }: OrderSummaryProps) {
  return (
    <Card>
      <CardContent>
        <Subtitle color={theme.colors.yellow.DEFAULT}>Summary</Subtitle>

        <OrderItems items={order.items} />
        <OrderCosts order={order} />
      </CardContent>
      <CardActions>
        <Grid container direction="row" justifyContent="flex-end">
          <Grid item xs={11}>
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
