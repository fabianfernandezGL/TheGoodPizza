import { Box } from '@mui/material'

import { theme } from 'styles/theme'
import { Caption, Subtitle } from 'components/Typography'

interface PriceProps {
  price: number
}

export default function Price({ price }: PriceProps): JSX.Element {
  return (
    <>
      <Box display="flex" flexDirection="column" textAlign="center">
        <Box>
          <Caption>
            <strong>starts at</strong>
          </Caption>
        </Box>
        <Box lineHeight={'20px'}>
          <Subtitle
            lineHeight={'200px'}
            align="center"
            color={theme.colors.black.DEFAULT}
          >
            ${price}
          </Subtitle>
        </Box>
      </Box>
    </>
  )
}
