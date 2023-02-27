import styled from 'styled-components'

import { theme } from 'styles/theme'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SAMPLE_ORDER } from 'test/mocks'
import { OrderLine } from './OrderLine'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin: auto;
  border-radius: 25px;
  width: 345px;
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Summary/Order Line',
  component: OrderLine,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof OrderLine>

const Template: ComponentStory<typeof OrderLine> = (args) => (
  <OrderLine {...args} />
)

export const Default = Template.bind({})
Default.args = {
  orderLine: SAMPLE_ORDER.items[0],
}
