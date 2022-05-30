import { Col, Row } from 'antd'
import Subtitle from 'components/Typography/Subtitle'
import MenuOption from 'components/MenuHeader/MenuItem'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import Text from 'components/Typography/Text'
import styled from 'styled-components'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin-top: 50px;
`

const MenuOptions = [
  {
    name: <Text color={theme.colors.black.DEFAULT}>Terms & Conditions</Text>,
    href: '',
    span: 24,
  },
  {
    name: <Text color={theme.colors.black.DEFAULT}>Privacy Policy</Text>,
    href: '',
    span: 24,
  },
  {
    name: <Text color={theme.colors.black.DEFAULT}>Careers</Text>,
    href: '',
    span: 24,
  },
]

const ImportantStuff = () => {
  return (
    <Layout>
      <Row gutter={[0, 24]} align="bottom">
        <Col span={24}>
          <Subtitle color={theme.colors.white.DEFAULT}>
            Important Stuff!
          </Subtitle>
        </Col>
        <Col span={24}>
          {MenuOptions.map((option: MenuItemData, idx: number) => (
            <MenuOption key={idx} item={option} />
          ))}
        </Col>
      </Row>
    </Layout>
  )
}

export default ImportantStuff
