import styled from 'styled-components'

import { theme } from 'styles/theme'

import { OrderCosts } from './OrderCosts'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SAMPLE_ORDER } from 'test/mocks'

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
  title: 'Checkout/Summary/Order Costs',
  component: OrderCosts,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof OrderCosts>

const Template: ComponentStory<typeof OrderCosts> = (args) => (
  <OrderCosts {...args} />
)

export const Default = Template.bind({})
Default.args = {
  order: SAMPLE_ORDER,
}
