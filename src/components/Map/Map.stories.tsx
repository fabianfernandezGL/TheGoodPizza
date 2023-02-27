import styled from 'styled-components'

import { theme } from 'styles/theme'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Map } from './Map'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Components/Map',
  component: Map,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = () => <Map />

export const Default = Template.bind({})
