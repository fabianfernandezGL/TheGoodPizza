import styled from 'styled-components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { theme } from 'styles/theme'
import { ItemsTableHeader } from './ItemsTableHeader'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Summary Table/Header',
  component: ItemsTableHeader,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ItemsTableHeader>

const Template: ComponentStory<typeof ItemsTableHeader> = () => (
  <ItemsTableHeader />
)

export const Default = Template.bind({})
