import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

import MenuOptions from 'constants/menuOptions'
import Logo from 'components/Logo'

const ResponsiveMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      sx={{
        display: { md: 'none' },
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: { flexGrow: 1, sm: 'flex', md: 'none' },
          }}
        >
          <Logo width={40} />
        </Box>
        <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { sm: 'block', md: 'none' },
            }}
          >
            {MenuOptions.map((page, idx) => (
              <MenuItem key={idx} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default ResponsiveMenu
