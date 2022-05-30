import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './constants/routes.json'
import Home from 'pages/Home'
import MainLayout from 'components/Layouts/MainLayout'
import MenuHeader from 'components/MenuHeader'
import Footer from 'components/Footer'

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
