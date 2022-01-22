import React from 'react'
import { MenuItemData } from 'global.types'
import { Col } from 'antd'

interface MenuItemProps {
  item: MenuItemData
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Col span={item.span}>
      <a href={item.href} key={item.name}>
        {item.icon && (
          <item.icon style={{ fontSize: '30px' }} aria-hidden="true" />
        )}
        {item.name}
        {item.img && <img src={item.img.path} width={item.img.width} />}
      </a>
    </Col>
  )
}

export default MenuItem
