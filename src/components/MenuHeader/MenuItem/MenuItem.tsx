import { Link } from 'react-router-dom'
import { MenuItemData } from 'global.types'
import { Col } from 'antd'

interface MenuItemProps {
  item: MenuItemData
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Col span={item.span}>
      <Link to={item.href} key={item.idx}>
        {item.icon && (
          <item.icon style={{ fontSize: '30px' }} aria-hidden="true" />
        )}
        {item.name}
        {item.img && <img src={item.img.path} width={item.img.width} />}
      </Link>
    </Col>
  )
}

export default MenuItem
