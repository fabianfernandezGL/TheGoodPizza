import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './constants/routes.json'
import Home from 'pages/Home'
import MainLayout from 'components/Layouts/MainLayout'
import MenuHeader from 'components/MenuHeader'
import Footer from 'components/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { pizzaTheme } from 'styles/muiTheme'

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
                <Route path={routes.HOME} element={<Home />} />
              </Route>
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
