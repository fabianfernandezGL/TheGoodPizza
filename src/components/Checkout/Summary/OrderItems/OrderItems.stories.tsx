import styled from 'styled-components'

import { theme } from 'styles/theme'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SAMPLE_ORDER } from 'test/mocks'
import { OrderItems } from './OrderItems'

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
  title: 'Checkout/Summary/Order Items',
  component: OrderItems,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof OrderItems>

const Template: ComponentStory<typeof OrderItems> = (args) => (
  <OrderItems {...args} />
)

export const Default = Template.bind({})
Default.args = {
  items: SAMPLE_ORDER.items,
}
