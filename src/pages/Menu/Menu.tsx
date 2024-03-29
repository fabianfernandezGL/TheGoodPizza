import { Grid } from '@mui/material'

import { theme } from 'styles/theme'
import mainBg from 'images/menu/bg.png'
import Pizzas from 'constants/pizzaOptions'
import { PizzaInformation } from 'global.types'
import { MenuOptionCard } from 'components/Menu'
import { SmallTitle } from 'components/Typography'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'

type MenuProps = {
  isAuthenticated: boolean
}

export default function Menu({ isAuthenticated }: MenuProps): JSX.Element {
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
            <MenuOptionCard
              data={pizzaData}
              isAuthenticated={isAuthenticated}
            />
          </Grid>
        ))}
      </Grid>
    </SecondaryLayout>
  )
}
