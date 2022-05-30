import { Col, Row } from 'antd'
import Subtitle from 'components/Typography/Subtitle'
import MenuOption from 'components/MenuHeader/MenuItem'
import MenuOptions from 'constants/menuOptions'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import Text from 'components/Typography/Text'
import styled from 'styled-components'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin-top: 50px;
`

const OurLinks = () => {
  return (
    <Layout>
      <Row gutter={[0, 24]} align="bottom">
        <Col span={24}>
          <Subtitle color={theme.colors.white.DEFAULT}>Our Links</Subtitle>
        </Col>
        <Col span={24}>
          {MenuOptions.filter(
            (option: MenuItemData) => option.showInFooter
          ).map((option: MenuItemData, idx: number) => (
            <MenuOption
              key={idx}
              item={{
                ...option,
                span: 24,
                name: (
                  <Text color={theme.colors.black.DEFAULT}>{option.name}</Text>
                ),
              }}
            />
          ))}
        </Col>
      </Row>
    </Layout>
  )
}

export default OurLinks
