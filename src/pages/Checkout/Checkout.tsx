import { Box, Grid, Link, Stack } from '@mui/material'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'
import mainBg from 'images/checkout/bg.png'
import { OrderSummary } from './Summary/OrderSummary'
import { useAppSelector } from 'redux/hooks'
import { selectCart } from 'redux/slices/cart'
import { ItemsTable } from './ItemsTable'
import Button from 'components/Button'
import { Subtitle } from 'components/Typography'
import MenuOptions from 'constants/menuOptions'
import { Address } from './Address'
import { Payment } from './Payment'

export default function Checkout(): JSX.Element {
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
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
        mb={12}
      >
        <Grid item xs={8}>
          <Stack spacing={16}>
            <ItemsTable items={order.items} />
            <Address />
            <Payment />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <OrderSummary order={order} />
        </Grid>
      </Grid>
      <Box textAlign="center">
        <Button
          sx={{ width: '464px', height: '117px' }}
          size="large"
          variant="outlined"
          color="secondary"
        >
          <Subtitle>
            <Link
              color="secondary"
              underline="none"
              href={`/${
                MenuOptions.filter((option) => option.name === 'Menu').at(0)
                  ?.href
              }`}
            >
              Need Another?
            </Link>
          </Subtitle>
        </Button>
      </Box>
    </SecondaryLayout>
  )
}
