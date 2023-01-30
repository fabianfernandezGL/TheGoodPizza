import MenuOptions from 'constants/menuOptions'
import MenuOption from './MenuItem'
import { MenuItemData } from 'global.types'
import styled from 'styled-components'
import {
  AppBar as MuiAppBar,
  Toolbar,
  Avatar,
  Chip,
  Stack,
  Box,
} from '@mui/material'
import ResponsiveMenu from './ResponsiveMenu'
import { useAppSelector } from 'redux/hooks'
import { selectUserInfo } from 'redux/slices/user'
import logo from 'images/logo-white.svg'

type MenuHeaderProps = {
  isAuthenticated: boolean
}

const MenuLayout = styled.div`
  position: absolute;
  width: 100%;
`

const AppBar = styled(MuiAppBar)({
  padding: '3% 6.5%',
  width: '100%',
  zIndex: 999,
  background: 'rgba(0,0,0,0)',
  boxShadow: 'none',
}) as typeof MuiAppBar

const appBarResponsiveStyle = {
  display: { xs: 'none', sm: 'none', md: 'flex' },
}

const MenuHeader = ({ isAuthenticated }: MenuHeaderProps) => {
  const userInfo = useAppSelector(selectUserInfo)
  return (
    <MenuLayout>
      <AppBar position="relative" sx={appBarResponsiveStyle}>
        <Toolbar>
          <Stack
            spacing={9}
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            width="100%"
          >
            <Box width="15%">
              <img src={logo} width={122} />
            </Box>
            {MenuOptions.filter(
              ({ showWhenAuthActive, showWhenAuthInactive }: MenuItemData) => {
                if (isAuthenticated) {
                  return showWhenAuthActive
                }
                return showWhenAuthInactive
              }
            ).map((option: MenuItemData, idx: number) => (
              <MenuOption key={idx} data={option} />
            ))}
            {isAuthenticated && (
              <>
                <Chip
                  avatar={<Avatar>{userInfo.name?.charAt(0)}</Avatar>}
                  label={userInfo.name}
                  color="info"
                />
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <ResponsiveMenu />
    </MenuLayout>
  )
}

export default MenuHeader
