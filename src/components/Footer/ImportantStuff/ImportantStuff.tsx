import MenuOption from 'components/MenuHeader/MenuItem'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import routes from 'constants/routes.json'
import { Subtitle, Text } from 'components/Typography/Typography'
import { Grid } from '@mui/material'

const MenuOptions = [
  {
    name: <Text color={theme.colors.black.DEFAULT}>Terms & Conditions</Text>,
    href: `${routes.MAIN_ROOT}/${routes.HOME}`,
    span: 12,
  },
  {
    name: <Text color={theme.colors.black.DEFAULT}>Privacy Policy</Text>,
    href: `${routes.MAIN_ROOT}/${routes.HOME}`,
    span: 12,
  },
  {
    name: <Text color={theme.colors.black.DEFAULT}>Careers</Text>,
    href: `${routes.MAIN_ROOT}/${routes.HOME}`,
    span: 12,
  },
]

const ImportantStuff = () => {
  return (
    <Grid container mt={3}>
      <Grid item sm={12}>
        <Subtitle margin="1rem 0" color={theme.colors.white.DEFAULT}>
          Important Stuff!
        </Subtitle>
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
