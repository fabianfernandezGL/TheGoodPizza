import MenuOption from 'components/MenuHeader/MenuItem'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import routes from 'constants/routes.json'
import { Subtitle, Text } from 'components/Typography'
import { Stack } from '@mui/material'

const MenuOptions: Array<Partial<MenuItemData>> = [
  {
    name: <Text color={theme.colors.black.DEFAULT}>Terms & Conditions</Text>,
    href: `${routes.HOME}`,
  },
  {
    name: <Text color={theme.colors.black.DEFAULT}>Privacy Policy</Text>,
    href: `${routes.HOME}`,
  },
  {
    name: <Text color={theme.colors.black.DEFAULT}>Careers</Text>,
    href: `${routes.HOME}`,
  },
]

const ImportantStuff = () => {
  return (
    <Stack spacing={4}>
      <Subtitle margin="0" color={theme.colors.white.DEFAULT}>
        Important Stuff!
      </Subtitle>
      <Stack spacing={2}>
        {MenuOptions.map((option, idx: number) => (
          <MenuOption mt={2} key={idx} data={option} />
        ))}
      </Stack>
    </Stack>
  )
}

export default ImportantStuff
