import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import routes from './constants/routes.json'
import MainLayout from 'components/Layouts/BaseLayout'
import MenuHeader from 'components/MenuHeader'
import Footer from 'components/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { Backdrop, Box, ThemeProvider } from '@mui/material'
import { pizzaTheme } from 'styles/muiTheme'
import { PersistGate } from 'redux-persist/integration/react'

const SignUp = React.lazy(() => import('pages/SignUp'))
const Menu = React.lazy(() => import('pages/Menu'))
const Login = React.lazy(() => import('pages/Login'))
const NotFound = React.lazy(() => import('pages/NotFound'))
const Checkout = React.lazy(() => import('pages/Checkout'))
const Home = React.lazy(() => import('pages/Home'))

const suspenseWrapper = (component: JSX.Element) => (
  <Suspense
    fallback={
      <>
        <Box sx={{ height: '100vh' }} />
        <Backdrop
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            height: '100vh',
          }}
          open
        />
      </>
    }
  >
    {component}
  </Suspense>
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={pizzaTheme}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <MainLayout>
            <MenuHeader />
            <BrowserRouter>
              <Routes>
                <Route path={routes.HOME} element={suspenseWrapper(<Home />)} />
                <Route
                  path={routes.LOGIN}
                  element={suspenseWrapper(<Login />)}
                />
                <Route
                  path={routes.SIGN_UP}
                  element={suspenseWrapper(<SignUp />)}
                />
                <Route path={routes.MENU} element={suspenseWrapper(<Menu />)} />
                <Route
                  path={routes.CHECKOUT_ROOT}
                  element={suspenseWrapper(<Checkout />)}
                >
                  <Route
                    path={routes.CHECKOUT_ORDER}
                    element={suspenseWrapper(<Checkout />)}
                  />
                </Route>
                <Route path="/" element={<Navigate to={routes.HOME} />} />
                <Route path="*" element={suspenseWrapper(<NotFound />)} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </MainLayout>
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
