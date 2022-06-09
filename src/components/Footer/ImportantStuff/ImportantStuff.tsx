import MenuOption from 'components/MenuHeader/MenuItem'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import routes from 'constants/routes.json'
import {
  TypographySubtitle,
  TypographyText,
} from 'components/Typography/Typography'
import { Grid } from '@mui/material'

const MenuOptions = [
  {
    name: (
      <TypographyText color={theme.colors.black.DEFAULT}>
        Terms & Conditions
      </TypographyText>
    ),
    href: `${routes.MAIN_ROOT}/${routes.HOME}`,
    span: 12,
  },
  {
    name: (
      <TypographyText color={theme.colors.black.DEFAULT}>
        Privacy Policy
      </TypographyText>
    ),
    href: `${routes.MAIN_ROOT}/${routes.HOME}`,
    span: 12,
  },
  {
    name: (
      <TypographyText color={theme.colors.black.DEFAULT}>
        Careers
      </TypographyText>
    ),
    href: `${routes.MAIN_ROOT}/${routes.HOME}`,
    span: 12,
  },
]

const ImportantStuff = () => {
  return (
    <Grid container mt={3}>
      <Grid item sm={12}>
        <TypographySubtitle margin="1rem 0" color={theme.colors.white.DEFAULT}>
          Important Stuff!
        </TypographySubtitle>
      </Grid>
      <Grid container item sm={12}>
        {MenuOptions.map((option: MenuItemData, idx: number) => (
          <Grid item sm={12} key={idx}>
            <MenuOption item={option} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ImportantStuff
