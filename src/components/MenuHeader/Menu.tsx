import React from 'react'
import MenuOptions from 'constants/menuOptions'
import MenuOption from './MenuItem'
import { MenuItemData } from 'global.types'
import { Row } from 'antd'

const MenuHeader = () => {
  return (
    <Row align="middle">
      {MenuOptions.map((option: MenuItemData, idx: number) => (
        <MenuOption key={idx} item={option} />
      ))}
    </Row>
  )
}

export default MenuHeader
