import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { pizzaTheme } from 'styles/muiTheme'
import { PersistGate } from 'redux-persist/integration/react'
import { AppRoutes } from 'routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={pizzaTheme}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <AppRoutes />
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
