import styled from 'styled-components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { theme } from 'styles/theme'
import { QuantityHandler } from './QuantityHandler'
import Pizzas from 'constants/pizzaOptions'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Summary Table/Quantity Handler',
  component: QuantityHandler,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof QuantityHandler>

const Template: ComponentStory<typeof QuantityHandler> = (args) => (
  <QuantityHandler {...args} />
)

export const Default = Template.bind({})
Default.args = {
  itemInfo: Pizzas[0],
  quantity: 12,
}
