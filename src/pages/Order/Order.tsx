import {
  Box,
  Stack,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  stepConnectorClasses,
  stepLabelClasses,
} from '@mui/material'
import SecondaryLayout from 'components/Layouts/SecondaryLayout'
import mainBg from 'images/checkout/bg.png'
import { Subtitle, SmallTitle, Text } from 'components/Typography'
import { useParams } from 'react-router-dom'
import { theme } from 'styles/theme'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import HomeIcon from '@mui/icons-material/Home'
import styled from 'styled-components'

const steps = [
  { label: 'Order placed', icon: ShoppingCartIcon },
  { label: 'Order being prepared', icon: LocalPizzaIcon },
  { label: 'Your order is on its way', icon: DirectionsBikeIcon },
  { label: 'They’re outside! GO!', icon: HomeIcon },
]

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 35,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.colors.yellow.DEFAULT,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.colors.yellow.DEFAULT,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 7,
    border: 0,
    backgroundColor: theme.colors.gray.light,
    borderRadius: 1,
  },
}))

const CustomStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ ownerState }) => ({
  backgroundColor: theme.colors.gray.light,
  zIndex: 1,
  color: theme.colors.gray.lighter,
  padding: '23px',
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.colors.yellow.DEFAULT,
    color: theme.colors.black.light,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.colors.yellow.DEFAULT,
    color: theme.colors.black.light,
  }),
}))

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <ShoppingCartIcon />,
    2: <LocalPizzaIcon />,
    3: <DirectionsBikeIcon />,
    4: <HomeIcon />,
  }

  return (
    <CustomStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </CustomStepIconRoot>
  )
}

export default function Order(): JSX.Element {
  const { orderId } = useParams()
  return (
    <SecondaryLayout
      backgroundImg={mainBg}
      title="WE'RE FAST!"
      bigTitle="Well, sorta."
    >
      <Stack py={5} textAlign="center">
        <SmallTitle mb={4}>Your order has been completed!</SmallTitle>
        <Subtitle color={theme.colors.white.DEFAULT}>{orderId}</Subtitle>
        <Text mb={16} color={theme.colors.white.DEFAULT}>
          Order Number
        </Text>
        <Box sx={{ width: '100%' }}>
          <Stepper
            activeStep={1}
            alternativeLabel
            connector={<CustomConnector />}
          >
            {steps.map(({ label }) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    [`&.${stepLabelClasses.active}`]: {
                      [`& .${stepLabelClasses.label}`]: {
                        color: theme.colors.yellow.DEFAULT,
                      },
                    },
                    [`&.${stepLabelClasses.completed}`]: {
                      [`& .${stepLabelClasses.label}`]: {
                        color: theme.colors.yellow.DEFAULT,
                      },
                    },
                  }}
                  StepIconComponent={CustomStepIcon}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Stack>
    </SecondaryLayout>
  )
}
