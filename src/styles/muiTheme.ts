import { createTheme, ThemeOptions } from '@mui/material'
import { theme } from './theme'

const pizzaThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: theme.colors.yellow.DEFAULT,
      contrastText: theme.colors.white.DEFAULT,
    },
    secondary: {
      main: theme.colors.red.DEFAULT,
    },
    success: {
      main: theme.colors.green.DEFAULT,
      contrastText: theme.colors.white.DEFAULT,
    },
    background: {
      default: theme.colors.gray.dark,
      paper: theme.colors.gray.dark,
    },
    action: {
      disabled: theme.colors.gray.light,
    },
  },
  typography: {
    fontFamily: 'Red Hat Display',
    fontSize: 16,
    h1: {
      fontFamily: 'Rowdies',
      fontSize: 120,
      fontWeight: 700,
      color: theme.colors.yellow.DEFAULT,
    },
    h2: {
      fontFamily: 'Rowdies',
      fontSize: 80,
      fontWeight: 400,
      color: theme.colors.yellow.DEFAULT,
    },
    h3: {
      fontFamily: 'Rowdies',
      fontSize: 40,
      fontWeight: 700,
      color: theme.colors.yellow.DEFAULT,
    },
    h4: {
      fontFamily: 'Rowdies',
      fontSize: 24,
      fontWeight: 700,
      color: theme.colors.yellow.DEFAULT,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 20,
      fontWeight: 700,
      color: theme.colors.white.DEFAULT,
    },
    button: {
      fontFamily: 'Rowdies',
      fontSize: 20,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          background: theme.colors.white.DEFAULT,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          color: theme.colors.white.DEFAULT,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: theme.colors.white.DEFAULT,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        icon: {
          fontSize: '22px',
        },
        message: {
          fontFamily: 'Red Hat Display',
          fontSize: '16px',
          fontWeight: 400,
        },
        filled: {
          borderRadius: '25px 10px 10px 10px',
        },
      },
    },
  },
}

export const pizzaTheme = createTheme(pizzaThemeOptions)
