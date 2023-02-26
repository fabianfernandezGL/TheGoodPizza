import styled from 'styled-components'

import { theme } from 'styles/theme'

import { PaymentAddNew } from './PaymentAddNew'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Payment/Add New',
  component: PaymentAddNew,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof PaymentAddNew>

const Template: ComponentStory<typeof PaymentAddNew> = () => <PaymentAddNew />

export const Default = Template.bind({})
