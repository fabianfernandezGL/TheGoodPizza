import React, { FC } from 'react'
import './App.less'
import MenuHeader from 'components/MenuHeader'
import MainLayout from 'components/MainLayout'

const App: FC = () => (
  <MainLayout>
    <MenuHeader />
  </MainLayout>
)

export default App
