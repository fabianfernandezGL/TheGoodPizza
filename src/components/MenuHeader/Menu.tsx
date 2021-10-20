import React from 'react'
import MenuOptions from 'constants/menuOptions'
import MenuOption from './MenuItem'
import { MenuItemData } from 'global.types'

const MenuHeader = () => (
  <>
    {MenuOptions.map((option: MenuItemData, idx: number) => (
      <MenuOption key={idx} item={option} />
    ))}
  </>
)

export default MenuHeader
