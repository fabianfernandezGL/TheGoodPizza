import React from 'react'
import '../src/index.css'
import { addDecorator } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { ThemeProvider } from '@mui/material'
import { pizzaTheme } from '../src/styles/muiTheme'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <Provider store={store}>
    <ThemeProvider theme={pizzaTheme}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </ThemeProvider>
  </Provider>
))
