import { Box, Backdrop } from '@mui/material'
import Footer from 'components/Footer'
import MainLayout from 'components/Layouts/BaseLayout'
import MenuHeader from 'components/MenuHeader'
import { ProtectedRoute } from 'components/ProtectedRoute'
import routes from 'constants/routes.json'
import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import { selectIsAuth } from 'redux/slices/user'

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

export function AppRoutes() {
  const isAuthenticated = useAppSelector(selectIsAuth)
  return (
    <MainLayout>
      <MenuHeader isAuthenticated={isAuthenticated} />
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.HOME}
            element={suspenseWrapper(
              <Home isAuthenticated={isAuthenticated} />
            )}
          />
          <Route path={routes.LOGIN} element={suspenseWrapper(<Login />)} />
          <Route path={routes.SIGN_UP} element={suspenseWrapper(<SignUp />)} />
          <Route
            path={routes.MENU}
            element={suspenseWrapper(
              <Menu isAuthenticated={isAuthenticated} />
            )}
          />
          <Route
            path={routes.CHECKOUT_ROOT}
            element={suspenseWrapper(
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Checkout />
              </ProtectedRoute>
            )}
          >
            <Route
              path={routes.CHECKOUT_ORDER}
              element={suspenseWrapper(
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Checkout />
                </ProtectedRoute>
              )}
            />
          </Route>
          <Route path="/" element={<Navigate to={routes.HOME} />} />
          <Route path="*" element={suspenseWrapper(<NotFound />)} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </MainLayout>
  )
}
