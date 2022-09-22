import { createTheme, ThemeOptions } from '@mui/material'

const pizzaThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#F2C94C',
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: '#EB5757',
    },
    success: {
      main: '#27AE60',
      contrastText: '#F2F2F2',
    },
    background: {
      default: '#1f1f1f',
      paper: '#1f1f1f',
    },
  },
  typography: {
    fontFamily: 'Red Hat Display',
    fontSize: 16,
    h1: {
      fontFamily: 'Rowdies',
      fontSize: 120,
      fontWeight: 700,
      color: '#F2C94C',
    },
    h2: {
      fontFamily: 'Rowdies',
      fontSize: 80,
      fontWeight: 400,
      color: '#F2C94C',
    },
    h3: {
      fontFamily: 'Rowdies',
      fontSize: 40,
      fontWeight: 700,
      color: '#F2C94C',
    },
    h4: {
      fontSize: 24,
      fontFamily: 'Rowdies',
      fontWeight: 700,
      color: '#F2C94C',
    },
    body1: {
      fontSize: 16,
    },
    button: {
      fontFamily: 'Rowdies',
      fontWeight: 400,
      fontSize: 20,
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
          background: '#F2F2F2',
        },
      },
    },
  },
}

export const pizzaTheme = createTheme(pizzaThemeOptions)
