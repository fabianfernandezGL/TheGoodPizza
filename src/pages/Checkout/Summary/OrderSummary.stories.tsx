import styled from 'styled-components'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SAMPLE_ORDER } from 'test/mocks'
import { OrderSummary } from './OrderSummary'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin: auto;
  width: 345px;
  padding: 25px;
`

export default {
  title: 'Checkout/Summary/Order Summary Card',
  component: OrderSummary,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof OrderSummary>

const Template: ComponentStory<typeof OrderSummary> = (args) => (
  <OrderSummary {...args} />
)

export const Default = Template.bind({})
Default.args = {
  order: SAMPLE_ORDER,
}
