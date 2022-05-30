import MenuOptions from 'constants/menuOptions'
import MenuOption from './MenuItem'
import { MenuItemData } from 'global.types'
import { Row } from 'antd'
import styled from 'styled-components'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 2rem 6.5rem 6.5rem 6.5rem;
  width: 100%;
  z-index: 999;
  position: absolute;
`

const MenuHeader = () => {
  return (
    <Layout>
      <Row align="middle">
        {MenuOptions.map((option: MenuItemData, idx: number) => (
          <MenuOption key={idx} item={option} />
        ))}
      </Row>
    </Layout>
  )
}

export default MenuHeader
