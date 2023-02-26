import styled from 'styled-components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { theme } from 'styles/theme'

import { PaymentForm } from './PaymentForm'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  width: 450px;
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Payment/Form',
  component: PaymentForm,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof PaymentForm>

const Template: ComponentStory<typeof PaymentForm> = () => (
  <PaymentForm onSubmitForm={() => {}} />
)

export const Default = Template.bind({})
