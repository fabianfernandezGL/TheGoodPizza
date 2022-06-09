import MenuOption from 'components/MenuHeader/MenuItem'
import MenuOptions from 'constants/menuOptions'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import {
  TypographySubtitle,
  TypographyText,
} from 'components/Typography/Typography'
import { Grid } from '@mui/material'

const OurLinks = () => {
  return (
    <Grid container mt={3}>
      <Grid item sm={12}>
        <TypographySubtitle margin="1rem 0" color={theme.colors.white.DEFAULT}>
          Our Links
        </TypographySubtitle>
      </Grid>
      <Grid item container sm={12}>
        {MenuOptions.filter((option: MenuItemData) => option.showInFooter).map(
          (option: MenuItemData, idx: number) => (
            <Grid item sm={12} key={idx}>
              <MenuOption
                item={{
                  ...option,
                  span: 12,
                  name: (
                    <TypographyText color={theme.colors.black.DEFAULT}>
                      {option.name}
                    </TypographyText>
                  ),
                }}
              />
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  )
}

export default OurLinks
