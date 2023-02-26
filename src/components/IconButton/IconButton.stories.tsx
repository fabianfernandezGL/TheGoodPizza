import styled from 'styled-components'
import {
  Add,
  CardTravel,
  Delete,
  LocalPizza,
  ShoppingBag,
} from '@mui/icons-material'

import { theme } from 'styles/theme'

import IconButton from './IconButton'
import { ComponentMeta } from '@storybook/react'
import { Stack } from '@mui/material'

const { black, white, yellow } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  width: 400px;
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Form/Icon Button',
  component: IconButton,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof IconButton>

const Template = () => (
  <Stack direction="row" spacing={4}>
    <IconButton>
      <Delete sx={{ width: '18px', color: white.DEFAULT }} />
    </IconButton>
    <IconButton>
      <Add sx={{ width: '18px', color: yellow.DEFAULT }} />
    </IconButton>
    <IconButton>
      <ShoppingBag sx={{ width: '18px', color: white.DEFAULT }} />
    </IconButton>
    <IconButton>
      <LocalPizza sx={{ width: '18px', color: yellow.DEFAULT }} />
    </IconButton>
    <IconButton>
      <CardTravel sx={{ width: '18px', color: white.DEFAULT }} />
    </IconButton>
  </Stack>
)

export const Default = Template.bind({})
