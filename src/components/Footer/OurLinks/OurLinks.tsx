import MenuOption from 'components/MenuHeader/MenuItem'
import MenuOptions from 'constants/menuOptions'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import {
  TypographySubtitle,
  TypographyText,
} from 'components/Typography/Typography'
import { Grid } from '@mui/material'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin-top: 50px;
`

const OurLinks = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item sm={12}>
          <TypographySubtitle color={theme.colors.white.DEFAULT}>
            Our Links
          </TypographySubtitle>
        </Grid>
        <Grid item sm={12}>
          {MenuOptions.filter(
            (option: MenuItemData) => option.showInFooter
          ).map((option: MenuItemData, idx: number) => (
            <MenuOption
              key={idx}
              item={{
                ...option,
                span: 24,
                name: (
                  <TypographyText color={theme.colors.black.DEFAULT}>
                    {option.name}
                  </TypographyText>
                ),
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default OurLinks
