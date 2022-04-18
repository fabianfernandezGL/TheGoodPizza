import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './constants/routes.json'
import Home from 'pages/Home'
import MainLayout from 'components/MainLayout'
import MenuHeader from 'components/MenuHeader'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <MenuHeader />
          <Routes>
            <Route path="/PizzaCart-UI" element={<Home />}>
              <Route path={routes.HOME} element={<Home />} />
            </Route>
          </Routes>
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
