import styled from 'styled-components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { theme } from 'styles/theme'

import { ItemsSummary } from './ItemsSummary'
import Pizzas from 'constants/pizzaOptions'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Summary',
  component: ItemsSummary,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ItemsSummary>

const Template: ComponentStory<typeof ItemsSummary> = (args) => (
  <ItemsSummary {...args} />
)

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      itemInfo: { ...Pizzas[0] },
      quantity: 5,
      total: Pizzas[0].price * 2,
    },
    {
      itemInfo: { ...Pizzas[2] },
      quantity: 2,
      total: Pizzas[2].price * 2,
    },
    {
      itemInfo: { ...Pizzas[4] },
      quantity: 1,
      total: Pizzas[4].price * 2,
    },
  ],
}
