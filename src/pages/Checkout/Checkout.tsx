import { Grid, Stack, Tab, Tabs } from '@mui/material'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'
import mainBg from 'images/checkout/bg.png'
import { OrderSummary, FullSummary } from './Summary'
import { useAppSelector } from 'redux/hooks'
import { selectCart } from 'redux/slices/cart'
import { ItemsSummary } from './ItemsSummary'
import { Address } from './Address'
import { Payment } from './Payment'
import { useState } from 'react'
import { capitalizeText } from 'utils/textHelper'

const tabs = ['order', 'address', 'payment', 'checkout']

export default function Checkout(): JSX.Element {
  const order = useAppSelector(selectCart)
  const [tabSelected, setTabSelected] = useState(tabs[0])

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabSelected(newValue)
  }

  const setNext = () => {
    const tabIdx = tabs.indexOf(tabSelected)
    if (tabIdx + 1 < tabs.length) {
      setTabSelected(tabs[tabIdx + 1])
    }
  }

  const setPrev = () => {
    const tabIdx = tabs.indexOf(tabSelected)
    if (tabIdx - 1 >= 0) {
      setTabSelected(tabs[tabIdx - 1])
    }
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
              <FullSummary order={order} prevStep={setPrev} />
            )}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <OrderSummary
            order={order}
            nextStep={setNext}
            prevStep={setPrev}
            isNextAvailable={tabSelected !== tabs[3]}
            isPrevAvailable={tabSelected !== tabs[0]}
          />
        </Grid>
      </Grid>
    </SecondaryLayout>
  )
}
