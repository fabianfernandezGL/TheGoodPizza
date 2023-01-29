import MenuOption from 'components/MenuHeader/MenuItem'
import MenuOptions from 'constants/menuOptions'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import { Subtitle, Text } from 'components/Typography'
import { Grid, Stack } from '@mui/material'

const OurLinks = () => {
  return (
    <Stack spacing={4}>
      <Subtitle margin="0" color={theme.colors.white.DEFAULT}>
        Our Links
      </Subtitle>
      <Grid container>
        {MenuOptions.filter((option: MenuItemData) => option.showInFooter).map(
          (option: MenuItemData, idx: number) => {
            const customData = {
              ...option,
              name: (
                <Text m={0} color={theme.colors.black.DEFAULT}>
                  {option.name}
                </Text>
              ),
              span: 12,
            }
            return <MenuOption mt={2} key={idx} data={customData} />
          }
        )}
      </Grid>
    </Stack>
  )
}

export default OurLinks
