import styled from 'styled-components'

import { theme } from 'styles/theme'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CustomStepper } from './CustomStepper'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Components/Custom Stepper',
  component: CustomStepper,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof CustomStepper>

const Template: ComponentStory<typeof CustomStepper> = () => <CustomStepper />

export const Default = Template.bind({})
