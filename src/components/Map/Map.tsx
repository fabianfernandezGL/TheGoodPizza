import { Box } from '@mui/material'
import mapPath from 'images/order/map.png'

export function Map({}) {
  return (
    <Box
      width="953.28px"
      height="519px"
      sx={{
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
      }}
    >
      <img src={mapPath} width="100%" />
    </Box>
  )
}
