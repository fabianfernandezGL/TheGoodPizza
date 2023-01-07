import { Grid } from '@mui/material'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'
import mainBg from 'images/menu/bg.png'
import { OrderSummary } from './OrderSummary'
import { useAppSelector } from 'redux/hooks'
import { selectCart } from 'redux/slices/cart'

export default function Order(): JSX.Element {
  const order = useAppSelector(selectCart)
  return (
    <SecondaryLayout
      backgroundImg={mainBg}
      title="WE'RE FAST!"
      bigTitle="Well, sorta."
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <OrderSummary order={order} />
        </Grid>
      </Grid>
    </SecondaryLayout>
  )
}
