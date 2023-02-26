import styled from 'styled-components'

import { theme } from 'styles/theme'

import { AddressAddNew } from './AddressAddNew'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Address/Add New',
  component: AddressAddNew,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof AddressAddNew>

const Template: ComponentStory<typeof AddressAddNew> = () => <AddressAddNew />

export const Default = Template.bind({})
