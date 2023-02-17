import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { PersistGate } from 'redux-persist/integration/react'

import { AppRoutes } from 'routes'
import { pizzaTheme } from 'styles/muiTheme'
import { persistor, store } from './redux/store'
import { ErrorDispatcher } from 'components/Alert'

import './index.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={pizzaTheme}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <ErrorDispatcher>
            <AppRoutes />
          </ErrorDispatcher>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
