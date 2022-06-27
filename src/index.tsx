import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import routes from './constants/routes.json'
import Home from 'pages/Home'
import MainLayout from 'components/Layouts/MainLayout'
import MenuHeader from 'components/MenuHeader'
import Footer from 'components/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { pizzaTheme } from 'styles/muiTheme'
import Login from 'pages/Login/Login'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={pizzaTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <MainLayout>
            <MenuHeader />
            <Routes>
              <Route path={routes.MAIN_ROOT}>
                <Route path={routes.LOGIN} element={<Login />} />
                <Route path={routes.HOME} element={<Home />} />
              </Route>
              <Route path="/" element={<Navigate to={routes.MAIN_ROOT} />} />
            </Routes>
            <Footer />
          </MainLayout>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
