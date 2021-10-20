import React from 'react'
import { MenuItemData } from 'global.types'

interface MenuItemProps {
  item: MenuItemData
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <a
      href={item.href}
      key={item.name}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {item.icon && (
        <item.icon
          className="flex-shrink-0 h-6 w-6 text-yellow"
          aria-hidden="true"
        />
      )}
      {item.name}
    </a>
  )
}

export default MenuItem
