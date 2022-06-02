import MenuOption from 'components/MenuHeader/MenuItem'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import routes from 'constants/routes.json'
import {
  TypographySubtitle,
  TypographyText,
} from 'components/Typography/Typography'
import { Grid } from '@mui/material'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin-top: 50px;
`

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
    <Layout>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <TypographySubtitle color={theme.colors.white.DEFAULT}>
            Important Stuff!
          </TypographySubtitle>
        </Grid>
        <Grid item sm={12}>
          {MenuOptions.map((option: MenuItemData, idx: number) => (
            <MenuOption key={idx} item={option} />
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ImportantStuff
