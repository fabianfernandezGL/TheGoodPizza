import MenuOption from 'components/MenuHeader/MenuItem'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import routes from 'constants/routes.json'
import { Subtitle, Text } from 'components/Typography'
import { Grid, Stack } from '@mui/material'

const MenuOptions: Array<MenuItemData> = [
  {
    name: <Text color={theme.colors.black.DEFAULT}>Terms & Conditions</Text>,
    href: `${routes.HOME}`,
    span: 12,
    authRequired: false,
  },
  {
    name: <Text color={theme.colors.black.DEFAULT}>Privacy Policy</Text>,
    href: `${routes.HOME}`,
    span: 12,
    authRequired: false,
  },
  {
    name: <Text color={theme.colors.black.DEFAULT}>Careers</Text>,
    href: `${routes.HOME}`,
    span: 12,
    authRequired: false,
  },
]

const ImportantStuff = () => {
  return (
    <Stack spacing={4}>
      <Subtitle margin="0" color={theme.colors.white.DEFAULT}>
        Important Stuff!
      </Subtitle>
      <Grid container item sm={12}>
        {MenuOptions.map((option: MenuItemData, idx: number) => (
          <Grid item sm={12} key={idx}>
            <MenuOption mt={2} data={option} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default ImportantStuff
