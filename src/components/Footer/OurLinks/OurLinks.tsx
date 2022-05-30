import { Col, Row } from 'antd'
import MenuOption from 'components/MenuHeader/MenuItem'
import MenuOptions from 'constants/menuOptions'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import {
  TypographySubtitle,
  TypographyText,
} from 'components/Typography/Typography'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin-top: 50px;
`

const OurLinks = () => {
  return (
    <Layout>
      <Row gutter={[0, 24]} align="bottom">
        <Col span={24}>
          <TypographySubtitle color={theme.colors.white.DEFAULT}>
            Our Links
          </TypographySubtitle>
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
                  <TypographyText color={theme.colors.black.DEFAULT}>
                    {option.name}
                  </TypographyText>
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
