import styled from 'styled-components'

import { theme } from 'styles/theme'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ShoppingCart } from './ShoppingCart'

const { yellow } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${yellow.DEFAULT};
`

export default {
  title: 'Components/Shopping Cart',
  component: ShoppingCart,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ShoppingCart>

const Template: ComponentStory<typeof ShoppingCart> = () => <ShoppingCart />

export const Default = Template.bind({})
