import MenuOptions from 'constants/menuOptions'
import MenuOption from './MenuItem'
import { MenuItemData } from 'global.types'
import styled from 'styled-components'
import { Grid } from '@mui/material'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 2rem 6.5rem 6.5rem 6.5rem;
  width: 100%;
  z-index: 999;
  position: absolute;
`

const MenuHeader = () => {
  return (
    <Layout>
      <Grid container item spacing={4}>
        {MenuOptions.map((option: MenuItemData, idx: number) => (
          <MenuOption key={idx} item={option} />
        ))}
      </Grid>
    </Layout>
  )
}

export default MenuHeader
