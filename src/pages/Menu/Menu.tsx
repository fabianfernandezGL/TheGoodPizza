import { Grid } from '@mui/material'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'
import { MenuOptionCard } from 'components/Menu'
import { SmallTitle } from 'components/Typography/Typography'
import mainBg from 'images/menu/bg.png'
import { theme } from 'styles/theme'
import Pizzas from 'constants/pizzaOptions'
import { PizzaInformation } from 'global.types'

export default function Menu(): JSX.Element {
  return (
    <SecondaryLayout backgroundImg={mainBg} title="OUR MOST BELOVED MENU">
      <SmallTitle align="center" color={theme.colors.white.DEFAULT}>
        Our repertoire
      </SmallTitle>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={8}
      >
        {Pizzas.map((pizzaData: PizzaInformation, idx: number) => (
          <Grid mt={4} item xs={'auto'} key={idx} justifyContent="center">
            <MenuOptionCard data={pizzaData} />
          </Grid>
        ))}
      </Grid>
    </SecondaryLayout>
  )
}
