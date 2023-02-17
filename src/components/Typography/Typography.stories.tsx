import styled from 'styled-components'
import { Typography } from '@mui/material'

import { pizzaTheme } from 'styles/muiTheme'

const { typography } = pizzaTheme

const Layout = styled.div`
  width: 100%;
`

export default {
  title: 'Theme/Typography',
  component: Typography,
}

export const Black = () => (
  <>
    <Typography gutterBottom variant="h1">
      H1. Heading | font size: {typography.h1?.fontSize}
    </Typography>
    <Typography gutterBottom variant="h2">
      H2. Heading | font size: {typography.h2?.fontSize}
    </Typography>
    <Typography gutterBottom variant="h3">
      H3. Heading | font size: {typography.h3?.fontSize}
    </Typography>
    <Typography gutterBottom variant="h4">
      H4. Heading | font size: {typography.h4?.fontSize}
    </Typography>
    <Typography gutterBottom variant="h5">
      H5. Heading | font size: {typography.h5?.fontSize}
    </Typography>
    <Typography gutterBottom variant="h6">
      H6. Heading | font size: {typography.h6?.fontSize}
    </Typography>
    <Typography gutterBottom variant="subtitle1">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur | font size: {typography.subtitle1?.fontSize}
    </Typography>
    <Typography gutterBottom variant="subtitle2">
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur | font size: {typography.subtitle2?.fontSize}
    </Typography>
    <Typography gutterBottom variant="body1">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam. | font size: {typography.body1?.fontSize}
    </Typography>
    <Typography gutterBottom variant="body2">
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam. | font size: {typography.body2?.fontSize}
    </Typography>
    <Typography gutterBottom variant="button" display="block">
      button text | font size: {typography.button?.fontSize}
    </Typography>
    <Typography gutterBottom variant="caption" display="block">
      caption text | font size: {typography.caption?.fontSize}
    </Typography>
    <Typography gutterBottom variant="overline" display="block">
      overline text | font size: {typography.overline?.fontSize}
    </Typography>
  </>
)

Black.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]
