import { Box, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

import { theme } from 'styles/theme'
import { Map } from 'components/Map'
import mainBg from 'images/checkout/bg.png'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'
import { Subtitle, SmallTitle, Text } from 'components/Typography'

import CustomStepper from './CustomStepper'

export default function Order(): JSX.Element {
  const { orderId } = useParams()
  return (
    <SecondaryLayout
      backgroundImg={mainBg}
      title="WE'RE FAST!"
      bigTitle="Well, sorta."
    >
      <Stack py={5} textAlign="center" justifyContent="center" spacing={20}>
        <Box>
          <SmallTitle mb={4}>Your order has been completed!</SmallTitle>
          <Subtitle color={theme.colors.white.DEFAULT}>{orderId}</Subtitle>
          <Text color={theme.colors.white.DEFAULT}>Order Number</Text>
        </Box>
        <CustomStepper />
        <Map />
      </Stack>
    </SecondaryLayout>
  )
}
