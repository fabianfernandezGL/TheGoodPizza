import { Grid, Stack, Tab, Tabs } from '@mui/material'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'
import mainBg from 'images/checkout/bg.png'
import { OrderSummary, FullSummary } from './Summary'
import { useAppSelector } from 'redux/hooks'
import { selectCart } from 'redux/slices/cart'
import { ItemsSummary } from './ItemsSummary'
import Button from 'components/Button'
import { Subtitle } from 'components/Typography'
import { Address } from './Address'
import { Payment } from './Payment'
import { theme } from 'styles/theme'
import { useState } from 'react'
import { capitalizeText } from 'utils/textHelper'

const tabs = ['order', 'address', 'payment', 'checkout']

export default function Checkout(): JSX.Element {
  const order = useAppSelector(selectCart)
  const [tabSelected, setTabSelected] = useState(tabs[0])

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabSelected(newValue)
  }

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
        spacing={16}
        mb={12}
      >
        <Grid item xs={8}>
          <Stack spacing={8}>
            <Tabs value={tabSelected} onChange={handleTabChange}>
              {tabs.map((tab, idx) => (
                <Tab
                  value={tab}
                  label={capitalizeText(tab)}
                  key={`${idx}-${tab}`}
                />
              ))}
            </Tabs>
            {tabSelected === tabs[0] && (
              <>
                <ItemsSummary items={order.items} />
              </>
            )}
            {tabSelected === tabs[1] && <Address />}
            {tabSelected === tabs[2] && <Payment />}
            {tabSelected === tabs[3] && (
              <>
                <FullSummary order={order} />
                <Stack direction="row" justifyContent="space-between">
                  <Button
                    size="large"
                    color="secondary"
                    variant="outlined"
                    sx={{ width: '381px', height: '93px' }}
                  >
                    <Subtitle color={theme.colors.red.DEFAULT}>
                      Go back
                    </Subtitle>
                  </Button>
                  <Button
                    size="large"
                    color="secondary"
                    variant="contained"
                    sx={{ width: '381px', height: '93px' }}
                  >
                    <Subtitle color={theme.colors.white.DEFAULT}>
                      Place Order
                    </Subtitle>
                  </Button>
                </Stack>
              </>
            )}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <OrderSummary order={order} />
        </Grid>
      </Grid>
    </SecondaryLayout>
  )
}
