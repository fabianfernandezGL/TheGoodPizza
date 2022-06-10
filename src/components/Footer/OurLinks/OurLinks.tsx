import MenuOption from 'components/MenuHeader/MenuItem'
import MenuOptions from 'constants/menuOptions'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import { Subtitle, Text } from 'components/Typography/Typography'
import { Grid } from '@mui/material'

const OurLinks = () => {
  return (
    <Grid container mt={3}>
      <Grid item sm={12}>
        <Subtitle margin="1rem 0" color={theme.colors.white.DEFAULT}>
          Our Links
        </Subtitle>
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
                    <Text color={theme.colors.black.DEFAULT}>
                      {option.name}
                    </Text>
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
